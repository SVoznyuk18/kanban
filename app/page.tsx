import styles from './page.module.css'

import { Board } from '@/ComponentsRoot'

// const getData = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/api/boards');
//     if (!response.ok) throw new Error("sometging went wrong");

//     return response.json();

//   } catch (error) {
//     console.log(error)
//   }
// }

const board =
{
  "name": "Platform Launch",
  "columns": [
    {
      "name": "Todo",
      id: 'qwert',
      "tasks": [
        {
          "title": "Build UI for onboarding flow",
          "description": "",
          "status": "Todo",
          id: 'Build UI for onboarding flow',
          "subtasks": [
            {
              "title": "Sign up page",
              "isCompleted": true
            },
            {
              "title": "Sign in page",
              "isCompleted": false
            },
            {
              "title": "Welcome page",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Build UI for search",
          "description": "",
          "status": "Todo",
          id: 'Build UI for search',
          "subtasks": [
            {
              "title": "Search page",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Build settings UI",
          "description": "",
          "status": "Todo",
          id: "Build settings UI",
          "subtasks": [
            {
              "title": "Account page",
              "isCompleted": false
            },
            {
              "title": "Billing page",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "QA and test all major user journeys",
          "description": "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
          "status": "Todo",
          id: "QA and test all major user journeys",
          "subtasks": [
            {
              "title": "Internal testing",
              "isCompleted": false
            },
            {
              "title": "External testing",
              "isCompleted": false
            }
          ]
        }
      ]
    },
    {
      "name": "Doing",
      id: 'asdfg',
      "tasks": [
        {
          "title": "Design settings and search pages",
          "description": "",
          "status": "Doing",
          id: "Design settings and search pages",
          "subtasks": [
            {
              "title": "Settings - Account page",
              "isCompleted": true
            },
            {
              "title": "Settings - Billing page",
              "isCompleted": true
            },
            {
              "title": "Search page",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Add account management endpoints",
          "description": "",
          "status": "Doing",
          id: "Add account management endpoints",
          "subtasks": [
            {
              "title": "Upgrade plan",
              "isCompleted": true
            },
            {
              "title": "Cancel plan",
              "isCompleted": true
            },
            {
              "title": "Update payment method",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Design onboarding flow",
          "description": "",
          "status": "Doing",
          id: 'Design onboarding flow',
          "subtasks": [
            {
              "title": "Sign up page",
              "isCompleted": true
            },
            {
              "title": "Sign in page",
              "isCompleted": false
            },
            {
              "title": "Welcome page",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Add search enpoints",
          "description": "",
          "status": "Doing",
          id: "Add search enpoints",
          "subtasks": [
            {
              "title": "Add search endpoint",
              "isCompleted": true
            },
            {
              "title": "Define search filters",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Add authentication endpoints",
          "description": "",
          "status": "Doing",
          id: 'Add authentication endpoints',
          "subtasks": [
            {
              "title": "Define user model",
              "isCompleted": true
            },
            {
              "title": "Add auth endpoints",
              "isCompleted": false
            }
          ]
        },
        {
          "title": "Research pricing points of various competitors and trial different business models",
          "description": "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          "status": "Doing",
          id: 'Research pricing points of various competitors and trial different business models',
          "subtasks": [
            {
              "title": "Research competitor pricing and business models",
              "isCompleted": true
            },
            {
              "title": "Outline a business model that works for our solution",
              "isCompleted": false
            },
            {
              "title": "Talk to potential customers about our proposed solution and ask for fair price expectancy",
              "isCompleted": false
            }
          ]
        }
      ]
    },
    {
      "name": "Done",
      id: 'zxcvb',
      "tasks": [
        {
          "title": "Conduct 5 wireframe tests",
          "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
          "status": "Done",
          id: 'Conduct 5 wireframe testsaaa',
          "subtasks": [
            {
              "title": "Complete 5 wireframe prototype tests",
              "isCompleted": true
            }
          ]
        },
        {
          "title": "Create wireframe prototype",
          "description": "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
          "status": "Done",
          id: 'Conduct 5 wireframe testssss',
          "subtasks": [
            {
              "title": "Create clickable wireframe prototype in Balsamiq",
              "isCompleted": true
            }
          ]
        },
        {
          "title": "Review results of usability tests and iterate",
          "description": "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
          "status": "Done",
          id: "Review results of usability tests and iterate",
          "subtasks": [
            {
              "title": "Meet to review notes from previous tests and plan changes",
              "isCompleted": true
            },
            {
              "title": "Make changes to paper prototypes",
              "isCompleted": true
            },
            {
              "title": "Conduct 5 usability tests",
              "isCompleted": true
            }
          ]
        },
        {
          "title": "Create paper prototypes and conduct 10 usability tests with potential customers",
          "description": "",
          "status": "Done",
          "id": "Create paper prototypes and conduct 10 usability tests with potential customers",
          "subtasks": [
            {
              "title": "Create paper prototypes for version one",
              "isCompleted": true
            },
            {
              "title": "Complete 10 usability tests",
              "isCompleted": true
            }
          ]
        },
        {
          "title": "Market discovery",
          "description": "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
          "status": "Done",
          id: "Market discovery",
          "subtasks": [
            {
              "title": "Interview 10 prospective customers",
              "isCompleted": true
            }
          ]
        },
        {
          "title": "Competitor analysis",
          "description": "",
          "status": "Done",
          id: "Competitor analysis",
          "subtasks": [
            {
              "title": "Find direct and indirect competitors",
              "isCompleted": true
            },
            {
              "title": "SWOT analysis for each competitor",
              "isCompleted": true
            }
          ]
        },
        {
          "title": "Research the market",
          "description": "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
          "status": "Done",
          id: "Research the market",
          "subtasks": [
            {
              "title": "Write up research analysis",
              "isCompleted": true
            },
            {
              "title": "Calculate TAM",
              "isCompleted": true
            }
          ]
        }
      ]
    }
  ]
}

interface ISubtask extends Document {
  title: string,
  isCompleted: boolean,
  timestamps: boolean
}

interface ITask extends Document {
  title: string,
  description: string,
  status: string,
  subtasks: Array<ISubtask>
}

interface IColumn extends Document {
  name: string,
  tasks: Array<ITask>
}

interface IBoard extends Document {
  name: string,
  columns: Array<IColumn>,
}

interface IBoardProps {
  board: IBoard
}

export default async function Home() {

  return (
    // @ts-ignore
    <Board board={board} />
  )
}
