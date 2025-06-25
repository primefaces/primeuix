# PRIMEUIX

### Setup

> [!IMPORTANT]
> This project requires **pnpm 9.6.0 or later**. Please ensure the correct version is installed before proceeding.

1. **Link Dependencies**  
   Run the following command to link dependencies:

   ```sh
   pnpm run link
   ```

   If any issues occur, it may be necessary to manually run the following command for each package inside the `packages` folder:

   ```sh
   cd packages/forms && pnpm run dev:link
   cd packages/themes && pnpm run dev:link
   ...
   ```

   In some cases, permission issues might require using `sudo`. For example:

   ```sh
   cd packages/themes && sudo pnpm run dev:link
   ...
   ```

> [!NOTE]
> This linking process only needs to be performed once.

2. **Setup the Project**  
   Run the setup command:

   ```sh
   pnpm run setup
   ```

3. **Start Development Server**  

- For **Angular**:

     ```sh
     pnpm run ng:dev
     ```

- For **React**:

     ```sh
     pnpm run react:dev
     ```

- For **Vue**:

     ```sh
     pnpm run vue:dev
     ```

### Submodules

This project includes **PrimeNG**, **PrimeReact** and **PrimeVue** as submodules. To update these submodules, run the following command:

   ```sh
   git submodule foreach git pull origin master
   ```

All set! Happy coding! 🚀
