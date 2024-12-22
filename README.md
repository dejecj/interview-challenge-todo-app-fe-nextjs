# Todo List App - Front-End  

This is the front-end of a **Full-Stack Todo List App**, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The app implements a responsive and clean UI for managing tasks, including functionality to create, edit, delete, and toggle task completion status.  

The back-end for this app is developed using **Express.js** and **Prisma** with **MySQL**. For setup instructions for the back-end, refer to the respective repository.  

---

## Features  

### **Home View**  
- Displays a list of tasks with:  
  - **Title**  
  - A checkbox to mark tasks as Completed/Not Completed  
  - A delete button  
- Includes:  
  - A **Create Task** button to navigate to a form for adding tasks  
  - A summary of tasks: "Tasks: X" and "Completed: Y of X"  
- Clicking on a task navigates to the **Edit Task Page**  

### **Create/Edit Task Page**  
- A form to:  
  - Add or update the task **Title** (required)  
  - Choose a **Color** for the task (selectable options, e.g., red, blue, green)  
- Behavior:  
  - Save changes and redirect to the **Home View**  
  - Navigating back without saving discards changes  

### **Other Features**  
- Directly toggle task completion status on the **Home View**  
- Confirm before deleting tasks  

---

## Getting Started  

### Prerequisites  
- Node.js (LTS recommended)  
- npm, yarn, pnpm, or bun  

### Installation  

1. Clone the repository:  
```bash
git clone <repo-url>
cd <repo-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
Create a .env file in the root directory and add:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```
Replace http://localhost:8080 with your back-end API base URL.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open http://localhost:3000 in your browser.

---

## Learn More
### Front-End Stack
- [Next.js Documentation](https://nextjs.org/docs)
- [Typescript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

## Deployment
To deploy this app, consider platforms like [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Ensure the environment variable NEXT_PUBLIC_API_BASE_URL points to your deployed back-end.

## Project Structure
```
src/
├── app/
│   ├── actions/
│   │   └── tasks.ts
│   ├── tasks/
│   │   └── [id]/
│   │   │   └── page.tsx
│   ├── └── new/
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── task-form.tsx
│   ├── task-item.tsx
│   ├── task-list.tsx
│   ├── header.tsx
│   ├── color-picker.tsx
│   ├── empty-state.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── round-checkbox.tsx
│       └── separator.tsx
├── constants/
│   └── colors.ts
└── lib/
│   └── utils.ts
└── types/
    └── task.ts
```
---

## Contributions

Contributions are welcome! Open an issue or submit a pull request if you have suggestions or improvements.