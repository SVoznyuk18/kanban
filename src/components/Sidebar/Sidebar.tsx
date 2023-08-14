'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Nav } from '@/ComponentsRoot'
import { SidebarSection, ToggleSideBar, HideSection } from './sidebar.style';



const boards = {
  "boards": [
    {
      "name": "Platform Launch",
      "columns": [
        {
          "name": "Todo",
          "tasks": [
            {
              "title": "Build UI for onboarding flow",
              "description": "",
              "status": "Todo",
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
          "tasks": [
            {
              "title": "Design settings and search pages",
              "description": "",
              "status": "Doing",
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
          "tasks": [
            {
              "title": "Conduct 5 wireframe tests",
              "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              "status": "Done",
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
  ]
}

const Sidebar: React.FC = () => {



  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  return (
    <SidebarSection isShowSidebar={toggleSidebar !== undefined ? toggleSidebar : false}>
      <ToggleSideBar
        isShowButton={toggleSidebar !== undefined ? toggleSidebar : false}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Image
          width='20'
          height='13'
          src='/show-sidebar.svg'
          alt='showSidebarIcon'
        />
      </ToggleSideBar>
      <Nav />
      <HideSection onClick={() => setToggleSidebar(!toggleSidebar)}>
        <Image
          width='16'
          height='16'
          src='/icon-hide-sidebar.svg'
          alt='hide_sidebar_logo'
        />
        <p>Hide Sidebar</p>
      </HideSection>
    </SidebarSection>
  )
}

export default Sidebar;