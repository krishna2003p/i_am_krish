import Image from "next/image";

export const dsaTopicsData = {
    array: [
      {
        title: "Array Basics",
        description: "Learn the fundamentals of arrays, how to define and manipulate arrays.",
        icon: "/icons/array-icon.png",
        link: "#",
      },
      {
        title: "Array Traversal",
        description: "Explore different ways to traverse through an array.",
        icon: "/icons/array-icon.png",
        link: "#",
      },
      {
        title: "Searching Algorithms",
        description: "Master searching algorithms like Linear Search and Binary Search.",
        icon: "/icons/array-icon.png",
        link: "#",
      },
      {
        title: "Sorting Algorithms",
        description: "Understand sorting techniques like Bubble Sort, Merge Sort, and Quick Sort.",
        icon: "/icons/array-icon.png",
        link: "#",
      },
    ],
    linkedList: [
      {
        title: "Singly Linked List",
        description: "Learn about singly linked lists, including insertions and deletions.",
        icon: "/icons/linkedlist-icon.png",
        link: "#",
      },
      {
        title: "Doubly Linked List",
        description: "Explore doubly linked lists and their operations.",
        icon: "/icons/linkedlist-icon.png",
        link: "#",
      },
      {
        title: "Circular Linked List",
        description: "Understand circular linked lists and their unique characteristics.",
        icon: "/icons/linkedlist-icon.png",
        link: "#",
      },
    ],
    trees: [
      {
        title: "Binary Tree",
        description: "Learn about binary trees, their properties and traversal techniques.",
        icon: "/icons/tree-icon.png",
        link: "#",
      },
      {
        title: "Binary Search Tree",
        description: "Explore binary search trees and their insertion and deletion operations.",
        icon: "/icons/tree-icon.png",
        link: "#",
      },
      {
        title: "AVL Tree",
        description: "Understand AVL trees, their balance conditions and rotations.",
        icon: "/icons/tree-icon.png",
        link: "#",
      },
    ],
    sorting: [
      {
        title: "Bubble Sort",
        description: "Understand the working of Bubble Sort algorithm.",
        icon: "/icons/sort-icon.png",
        link: "#",
      },
      {
        title: "Merge Sort",
        description: "Learn how Merge Sort works and its time complexity.",
        icon: "/icons/sort-icon.png",
        link: "#",
      },
      {
        title: "Quick Sort",
        description: "Explore the divide and conquer approach of Quick Sort.",
        icon: "/icons/sort-icon.png",
        link: "#",
      },
    ],
    graphs: [
      {
        title: "Graph Representations",
        description: "Learn different ways to represent graphs like adjacency matrix and list.",
        icon: "/icons/graph-icon.png",
        link: "#",
      },
      {
        title: "DFS and BFS",
        description: "Understand Depth-First Search and Breadth-First Search algorithms.",
        icon: "/icons/graph-icon.png",
        link: "#",
      },
      {
        title: "Shortest Path Algorithms",
        description: "Master algorithms for finding the shortest path in a graph like Dijkstra’s.",
        icon: "/icons/graph-icon.png",
        link: "#",
      },
    ],
    dynamicProgramming: [
      {
        title: "Knapsack Problem",
        description: "Learn about the Knapsack problem and its dynamic programming solution.",
        icon: "/icons/dp-icon.png",
        link: "#",
      },
      {
        title: "Longest Common Subsequence",
        description: "Understand the LCS problem and its efficient solution using DP.",
        icon: "/icons/dp-icon.png",
        link: "#",
      },
      {
        title: "Fibonacci Sequence",
        description: "Explore Fibonacci numbers and their dynamic programming approach.",
        icon: "/icons/dp-icon.png",
        link: "#",
      },
    ],
  };
  
  export const DsaCard = ({ title, description, icon, link }) => (
    <div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 border-2 border-transparent hover:border-teal-400 hover:bg-gradient-to-r from-green-500 to-teal-500 hover:text-white transform hover:scale-105 transition-all duration-300"
    >
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="mb-4 rounded-full border-4 border-teal-500 p-2 transform hover:scale-110 transition-all duration-300 ease-in-out"
      />
      <h3 className="text-2xl font-semibold transition-all duration-300 ease-in-out transform hover:text-white">{title}</h3>
      <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:text-gray-200">{description}</p>
    </div>
  );