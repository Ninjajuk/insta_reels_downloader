import React from 'react'

// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
    // const { theme, setTheme } = useTheme();
  return (
//     <nav className="fixed top-0 left-0 right-0 z-50 glass">
//     <div className="container mx-auto px-4 py-4">
//       <div className="flex items-center justify-between">
//         <Link to="/" className="flex items-center space-x-2">
//           <span className="font-clash text-xl font-bold">NinjaTube</span>
//         </Link>
//         <h1 className="hidden lg:block text-xl font-bold">YT Downloader</h1>
//         <div className="flex items-center space-x-4">
//           <Link to="/about" className="text-sm font-medium hover:opacity-80 transition-opacity">
//             About
//           </Link>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//           >
//             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   </nav>
<nav className="w-full bg-gray-800 p-4 shadow-md flex items-center justify-between sticky top-0 z-10">
        <a href="/" className="bg-purple-600 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-800 cursor-pointer">
          InstaNinja
        </a>
        <h1 className="hidden lg:block text-xl font-semibold text-white flex-grow text-center">Instagram Downloader</h1>
        <div className="w-24"></div>
      </nav> 
  )
}

export default Navbar