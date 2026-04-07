# Task Tracker System Instructions

This directory is used by AI models to track and update progress on tasks. 

## Process for AI Models

1.  **Task Initiation**:
    *   When a user gives a new task, first check the `.tasks/` directory for any existing `.md` files (excluding this instructions file).
    *   If there is an ongoing task (one that is not in the `completed/` folder), ask the user if they want to resume that task or start a new one.
    *   If starting a new task, create a new `.md` file in `.tasks/` with a descriptive name (e.g., `YYYYMMDD_task_description.md`).

2.  **Task Breakdown**:
    *   Analyze the task and break it down into a detailed TODO list within the new task file.
    *   Include a status section and a log of actions if necessary.

3.  **Task Execution**:
    *   As you perform actions, update the TODO list in the task file.
    *   Mark tasks as completed by checking the box (e.g., `[x]`).
    *   If execution stops (due to error or user interruption), the task file serves as the state to resume from.

4.  **Task Resumption**:
    *   When asked to resume, read the relevant task file to understand the current state and completed sub-tasks.
    *   Continue from the first uncompleted item.

5.  **Task Completion**:
    *   Once all items in the TODO list are checked, move the task file to the `.tasks/completed/` directory.
    *   **CRITICAL**: Never read files from the `completed/` directory unless explicitly asked by the user to "reopen" or "review" a past task.

## Rules
*   Proper naming: Use `YYYYMMDD_short_description.md` format.
*   Do not read the full content of an existing task file until you have started working on it or the user asks. Use the filename to identify the task first.
*   This directory should NOT be committed to git.
*   Always refer to this `README.md` to ensure the process is followed.
