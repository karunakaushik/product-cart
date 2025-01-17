### Product Cart - Next.js + Zustand + React Query

This project is a simple product listing and cart system built with Next.js, React Query, and Zustand for state management. It provides a listing page where users can view products, add them to their cart, and see real-time updates of the cart state across different pages. It also includes a search page where users can search for products and see the cart updates reflected across pages.

### Features
    Product Listing: Displays a list of products available for purchase.
    Add to Cart: Products can be added to the cart, with real-time quantity updates.
    Search Page: Search for products available in the catalog.
    Real-time Cart Updates: The cart updates dynamically across both the listing and search pages. Quantity adjustments are reflected in real-time across all pages.
    Persisted State: Uses Zustand to manage cart state globally across the application.

### Tech Stack
    Next.js: React framework for building server-side rendered applications.
    Zustand: A small, fast, and scalable bearbones state management library for React.
    React Query: Data fetching library to manage server state (though, in this case, mock data is used).
    Tailwind CSS: Utility-first CSS framework for styling.

### Setup
    Prerequisites
    Node.js (version 18.18.0 or higher)
    npm (Node package manager)


## Getting Started
    
    1. Clone the Repository:
        Open a terminal or command prompt.
        Run the following command to clone the GitHub repository:
        
            git clone <repository_url>
        Replace <repository_url> with the actual GitHub repository link
    2. Move into the directory containing the project files:  cd <project-folder>
    3. Install Dependencies : npm install or npm i
       Or, if you’re using yarn: yarn install
    4. Start the local development server: npm run dev
        Or, if you’re using yarn: yarn dev
        Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure :
    src/
        api/
            mock-api.tsx        
            mock-data.tsx  
        app/
            cart/page.tsx
            listing-page/page.tsx       // Listing Page
            search/page.tsx        // Search Page
            layout.tsx            // Root layout
            page.tsx               // Home Page
            globals.css           // Global styles (optional)
        
        components/
            nav-bar/
                nav-bar.tsx           // NavBar component
            product-card/
                product-card.tsx     // ProductCard component
        store/
            create-store.tsx        // Zustand store for cart management
            

### Future Improvements
    Persistent Cart: Store cart data in local storage or a database to persist across page refreshes.
    Product Categories: Introduce different categories of products and allow users to filter the list of products.
