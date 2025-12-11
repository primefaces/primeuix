/**
 * @primeuix/mcp - Example/code snippet tool factories
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { findComponent } from '../helpers.js';
import type { ComponentsData, PrimeMcpConfig } from '../types.js';

/**
 * Register all example-related tools on the MCP server
 */
export function registerExampleTools(server: McpServer, data: ComponentsData, config: PrimeMcpConfig): void {
    // list_examples
    server.tool(
        'list_examples',
        `List all available code examples across ${config.frameworkName} components`,
        {
            component: {
                type: 'string',
                description: 'Optional component name to filter examples'
            }
        },
        async ({ component }) => {
            const componentFilter = component as string | undefined;
            const examples: {
                component: string;
                section: string;
                label: string;
                variants: string[];
            }[] = [];

            const components = componentFilter ? data.components.filter((c) => c.name.toLowerCase() === componentFilter.toLowerCase()) : data.components;

            components.forEach((comp) => {
                comp.sections.forEach((section) => {
                    if (section.examples) {
                        examples.push({
                            component: comp.name,
                            section: section.id,
                            label: section.label,
                            variants: Object.keys(section.examples)
                        });
                    }
                });
            });

            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify({ total: examples.length, filter: componentFilter || 'all', examples }, null, 2)
                    }
                ]
            };
        }
    );

    // get_example
    server.tool(
        'get_example',
        `Get a specific code example by ${config.frameworkName} component and section`,
        {
            component: {
                type: 'string',
                description: 'Component name'
            },
            section: {
                type: 'string',
                description: "Section ID (e.g., 'basic', 'controlled', 'template')"
            },
            variant: {
                type: 'string',
                description: `Example variant: 'basic' for ${config.slotKey === 'slots' ? 'composition API' : 'template'}, '${config.slotKey === 'slots' ? 'options' : 'typescript'}' for ${config.slotKey === 'slots' ? 'options API' : 'component class'} (default: 'basic')`
            }
        },
        async ({ component, section, variant }) => {
            const comp = findComponent(data, component as string);
            const sectionData = comp.sections.find((s) => s.id.toLowerCase() === (section as string).toLowerCase());

            if (!sectionData) {
                const availableSections = comp.sections.map((s) => s.id).join(', ');

                return {
                    content: [
                        {
                            type: 'text',
                            text: `Section "${section}" not found for ${comp.name}. Available sections: ${availableSections}`
                        }
                    ]
                };
            }

            if (!sectionData.examples) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No code examples available for ${comp.name} > ${sectionData.label}`
                        }
                    ]
                };
            }

            const selectedVariant = (variant as string) || 'basic';
            const code = sectionData.examples[selectedVariant];

            if (!code) {
                const availableVariants = Object.keys(sectionData.examples).join(', ');

                return {
                    content: [
                        {
                            type: 'text',
                            text: `Variant "${selectedVariant}" not found. Available variants: ${availableVariants}`
                        }
                    ]
                };
            }

            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(
                            {
                                component: comp.name,
                                section: sectionData.id,
                                label: sectionData.label,
                                description: sectionData.description,
                                variant: selectedVariant,
                                available_variants: Object.keys(sectionData.examples),
                                code
                            },
                            null,
                            2
                        )
                    }
                ]
            };
        }
    );
}
