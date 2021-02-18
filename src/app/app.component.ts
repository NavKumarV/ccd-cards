import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ccd-cards';
  displaySections = [
    {
      "index": 1,
      "title": "Browse by subject",
      "data": [
        {
          "facet": "accountancy",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "accountancy"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "accountancy and auditing",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "accountancy and auditing"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "advance tamil",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "advance tamil"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "agricultural science",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "agricultural science"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "agriculture",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "agriculture"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "bengali",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "bengali"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "botany",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "botany"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "communicative english",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "communicative english"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "english",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "english"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "evs",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "evs"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "geography",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "geography"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "hindi",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "hindi"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "mathematics",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "mathematics"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "other",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "other"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "physics",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "physics"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        },
        {
          "facet": "science",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "subject": [
              "science"
            ]
          },
          "aggregate": {
            "groupBy": "primaryCategory"
          }
        }
      ],
      "dataSrc": {
        "type": "CONTENT_FACETS",
        "request": {
          "type": "POST",
          "path": "/api/content/v1/search",
          "withBearerToken": true,
          "body": {
            "request": {
              "offset": 0,
              "limit": 0,
              "exists": [],
              "facets": [
                "subject",
                "primaryCategory"
              ],
              "sort_by": {},
              "filters": {
                "audience": [],
                "objectType": [
                  "Content"
                ],
                "contentType": [],
                "primaryCategory": [],
                "gradeLevel": [
                  "Class 4",
                  "Class 5"
                ],
                "medium": [
                  "English"
                ],
                "board": [
                  "State (Andhra Pradesh)"
                ],
                "language": [],
                "topic": [],
                "purpose": [],
                "channel": [],
                "mimeType": [],
                "subject": []
              }
            }
          }
        },
        "mapping": [
          {
            "facet": "subject",
            "aggregate": {
              "groupBy": "primaryCategory"
            }
          },
          {
            "facet": "primaryCategory",
            "aggregate": {
              "groupBy": "subject"
            }
          }
        ]
      },
      "theme": {
        "component": "sb-pills-grid",
        "inputs": {
          "pillShape": "default",
          "pillsViewType": "scroll",
          "minDisplayCount": 10,
          "showMoreViewType": "new_screen",
          "viewMoreText": "View all subjects",
          "viewLessText": "View Less",
          "pillsMultiRow": "double_view_column"
        },
        "children": {
          "sb-pill-item": {
            "inputs": {
              "icon": "assets/imgs/book_default.svg"
            },
            "inputsMap": {
              "icon": {
                "german": "assets/imgs/book_english.svg",
                "mathematics": "assets/imgs/calculator.svg",
                "science": "assets/imgs/globe.svg"
              },
              "theme": {
                "german": {
                  "iconBgColor": "rgba(255,139,46,1)",
                  "pillBgColor": "rgba(255,139,46,0.3)"
                },
                "mathematics": {
                  "iconBgColor": "rgba(163,99,255,1)",
                  "pillBgColor": "rgba(163,99,255,0.3)"
                },
                "science": {
                  "iconBgColor": "rgba(34,139,255,1)",
                  "pillBgColor": "rgba(34,139,255,0.3)"
                }
              }
            }
          }
        }
      }
    },
    {
      "index": 2,
      "title": "Browse by category",
      "data": [
        {
          "facet": "content playlist",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "primaryCategory": [
              "content playlist"
            ]
          },
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "course assessment",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "primaryCategory": [
              "course assessment"
            ]
          },
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "digital textbook",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "primaryCategory": [
              "digital textbook"
            ]
          },
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "explanation content",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "primaryCategory": [
              "explanation content"
            ]
          },
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "learning resource",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "primaryCategory": [
              "learning resource"
            ]
          },
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "teacher resource",
          "searchCriteria": {
            "sortCriteria": [],
            "searchType": "search",
            "offset": 0,
            "limit": 100,
            "impliedFiltersMap": [],
            "impliedFilters": [],
            "facets": [
              "subject",
              "primaryCategory"
            ],
            "board": [
              "State (Andhra Pradesh)"
            ],
            "medium": [
              "English"
            ],
            "grade": [
              "Class 4",
              "Class 5"
            ],
            "primaryCategory": [
              "teacher resource"
            ]
          },
          "aggregate": {
            "groupBy": "subject"
          }
        }
      ],
      "dataSrc": {
        "type": "CONTENT_FACETS",
        "request": {
          "type": "POST",
          "path": "/api/content/v1/search",
          "withBearerToken": true,
          "body": {
            "request": {
              "offset": 0,
              "limit": 0,
              "exists": [],
              "facets": [
                "subject",
                "primaryCategory"
              ],
              "sort_by": {},
              "filters": {
                "audience": [],
                "objectType": [
                  "Content"
                ],
                "contentType": [],
                "primaryCategory": [],
                "gradeLevel": [
                  "Class 4",
                  "Class 5"
                ],
                "medium": [
                  "English"
                ],
                "board": [
                  "State (Andhra Pradesh)"
                ],
                "language": [],
                "topic": [],
                "purpose": [],
                "channel": [],
                "mimeType": [],
                "subject": []
              }
            }
          }
        },
        "mapping": [
          {
            "facet": "subject",
            "aggregate": {
              "groupBy": "primaryCategory"
            }
          },
          {
            "facet": "primaryCategory",
            "aggregate": {
              "groupBy": "subject"
            }
          }
        ]
      },
      "theme": {
        "component": "sb-pills-grid",
        "inputs": {
          "pillShape": "image_overlap",
          "pillsViewType": "scroll"
        },
        "children": {
          "sb-pill-item": {
            "inputs": {
              "icon": "assets/imgs/all_content.svg",
              "theme": {
                "iconBgColor": "#FFFFFF",
                "pillBgColor": "#FFFFFF"
              }
            },
            "inputsMap": {
              "icon": {
                "digital textbooks": "https://www.flaticon.com/svg/static/icons/svg/2502/2502529.svg",
                "courses": "https://www.flaticon.com/svg/static/icons/svg/2502/2502529.svg",
                "tv programs": "https://www.flaticon.com/svg/static/icons/svg/2502/2502529.svg",
                "documents": "https://www.flaticon.com/svg/static/icons/svg/2502/2502529.svg",
                "videos": "https://www.flaticon.com/svg/static/icons/svg/2502/2502529.svg"
              }
            }
          }
        }
      }
    },
    {
      "index": 0,
      "title": "Popular categories",
      "data": [
        {
          "facet": "Digital Textbook",
          "searchCriteria": {
            "facets": [],
            "primaryCategories": [
              "Digital Textbook"
            ],
            "mode": "soft",
            "searchType": "search"
          },
          "primaryFacetFilters": [
            {
              "code": "board",
              "translations": "{\"en\":\"Board/Syllabus\",\"hi\":\"बोर्ड\",\"te\":\"బోర్డు\",\"ta\":\"வாரியம்\",\"mr\":\"बोर्ड\"}",
              "values": [],
              "name": "Board/Syllabus",
              "index": 1
            },
            {
              "code": "gradeLevel",
              "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
              "values": [],
              "name": "Class",
              "index": 2
            }
          ],
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "Courses",
          "searchCriteria": {
            "facets": [],
            "primaryCategories": [
              "Course"
            ],
            "mode": "soft",
            "searchType": "search"
          },
          "primaryFacetFilters": [
            {
              "code": "board",
              "translations": "{\"en\":\"Board/Syllabus\",\"hi\":\"बोर्ड\",\"te\":\"బోర్డు\",\"ta\":\"வாரியம்\",\"mr\":\"बोर्ड\"}",
              "values": [],
              "name": "Board/Syllabus",
              "index": 1
            },
            {
              "code": "gradeLevel",
              "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
              "values": [],
              "name": "Class",
              "index": 2
            }
          ],
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "Tv Classes",
          "searchCriteria": {
            "facets": [],
            "primaryCategories": [
              "Explanation Content"
            ],
            "mode": "soft",
            "searchType": "search"
          },
          "primaryFacetFilters": [
            {
              "code": "board",
              "translations": "{\"en\":\"Board/Syllabus\",\"hi\":\"बोर्ड\",\"te\":\"బోర్డు\",\"ta\":\"வாரியம்\",\"mr\":\"बोर्ड\"}",
              "values": [],
              "name": "Board/Syllabus",
              "index": 1
            },
            {
              "code": "gradeLevel",
              "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
              "values": [],
              "name": "Class",
              "index": 2
            }
          ],
          "aggregate": {
            "groupBy": "subject"
          }
        }
      ],
      "dataSrc": {
        "type": "CONTENT_FACETS",
        "request": {
          "type": "POST",
          "path": "/api/content/v1/search",
          "withBearerToken": true,
          "body": {
            "request": {
              "limit": 0,
              "offset": 0,
              "mode": "hard",
              "facets": [],
              "filters": {}
            }
          }
        },
        "values": [
          {
            "facet": "Digital Textbook",
            "searchCriteria": {
              "facets": [],
              "primaryCategories": [
                "Digital Textbook"
              ],
              "mode": "soft",
              "searchType": "search"
            },
            "primaryFacetFilters": [
              {
                "code": "board",
                "translations": "{\"en\":\"Board/Syllabus\",\"hi\":\"बोर्ड\",\"te\":\"బోర్డు\",\"ta\":\"வாரியம்\",\"mr\":\"बोर्ड\"}",
                "values": [],
                "name": "Board/Syllabus",
                "index": 1
              },
              {
                "code": "gradeLevel",
                "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
                "values": [],
                "name": "Class",
                "index": 2
              }
            ],
            "aggregate": {
              "groupBy": "subject"
            }
          },
          {
            "facet": "Courses",
            "searchCriteria": {
              "facets": [],
              "primaryCategories": [
                "Course"
              ],
              "mode": "soft",
              "searchType": "search"
            },
            "primaryFacetFilters": [
              {
                "code": "board",
                "translations": "{\"en\":\"Board/Syllabus\",\"hi\":\"बोर्ड\",\"te\":\"బోర్డు\",\"ta\":\"வாரியம்\",\"mr\":\"बोर्ड\"}",
                "values": [],
                "name": "Board/Syllabus",
                "index": 1
              },
              {
                "code": "gradeLevel",
                "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
                "values": [],
                "name": "Class",
                "index": 2
              }
            ],
            "aggregate": {
              "groupBy": "subject"
            }
          },
          {
            "facet": "Tv Classes",
            "searchCriteria": {
              "facets": [],
              "primaryCategories": [
                "Explanation Content"
              ],
              "mode": "soft",
              "searchType": "search"
            },
            "primaryFacetFilters": [
              {
                "code": "board",
                "translations": "{\"en\":\"Board/Syllabus\",\"hi\":\"बोर्ड\",\"te\":\"బోర్డు\",\"ta\":\"வாரியம்\",\"mr\":\"बोर्ड\"}",
                "values": [],
                "name": "Board/Syllabus",
                "index": 1
              },
              {
                "code": "gradeLevel",
                "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
                "values": [],
                "name": "Class",
                "index": 2
              }
            ],
            "aggregate": {
              "groupBy": "subject"
            }
          }
        ],
        "mapping": []
      },
      "theme": {
        "component": "sb-pills-grid",
        "inputs": {
          "pillShape": "default",
          "pillBorder": "rounded"
        },
        "children": {
          "sb-pill-item": {
            "inputs": {
              "icon": "assets/imgs/book_default.svg"
            },
            "inputsMap": {
              "icon": {
                "german": "assets/imgs/book_english.svg",
                "mathematics": "assets/imgs/calculator.svg",
                "science": "assets/imgs/globe.svg"
              }
            }
          }
        },

      }
    },
    {
      "index": 1,
      "title": "Search from other boards",
      "data": [
        {
          "facet": "AP",
          "searchCriteria": {
            "facets": [
              "board"
            ],
            "filters": {
              "board": [
                "ts_k-12_2"
              ]
            }
          },
          "primaryFacetFilters": [
            {
              "code": "gradeLevel",
              "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
              "values": [],
              "name": "Class",
              "index": 2
            },
            {
              "code": "medium",
              "translations": "{\"en\":\"Medium\",\"hi\":\"माध्यम\",\"te\":\"మాధ్యమం\",\"ta\":\"மொழி\",\"mr\":\"माध्यम\"}",
              "values": [],
              "name": "Medium",
              "index": 4
            }
          ],
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "AS",
          "searchCriteria": {
            "facets": [
              "board"
            ],
            "filters": {
              "board": [
                "as_k-12_5"
              ]
            }
          },
          "primaryFacetFilters": [
            {
              "code": "gradeLevel",
              "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
              "values": [],
              "name": "Class",
              "index": 2
            },
            {
              "code": "medium",
              "translations": "{\"en\":\"Medium\",\"hi\":\"माध्यम\",\"te\":\"మాధ్యమం\",\"ta\":\"மொழி\",\"mr\":\"माध्यम\"}",
              "values": [],
              "name": "Medium",
              "index": 4
            }
          ],
          "aggregate": {
            "groupBy": "subject"
          }
        },
        {
          "facet": "KA",
          "searchCriteria": {
            "facets": [
              "board"
            ],
            "filters": {
              "board": [
                "ka_k-12_1"
              ]
            }
          },
          "primaryFacetFilters": [
            {
              "code": "gradeLevel",
              "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
              "values": [],
              "name": "Class",
              "index": 2
            },
            {
              "code": "medium",
              "translations": "{\"en\":\"Medium\",\"hi\":\"माध्यम\",\"te\":\"మాధ్యమం\",\"ta\":\"மொழி\",\"mr\":\"माध्यम\"}",
              "values": [],
              "name": "Medium",
              "index": 4
            }
          ],
          "aggregate": {
            "groupBy": "subject"
          }
        }
      ],
      "dataSrc": {
        "type": "CONTENT_FACETS",
        "request": {
          "type": "POST",
          "path": "/api/content/v1/search",
          "withBearerToken": true,
          "body": {
            "request": {
              "limit": 0,
              "offset": 0,
              "mode": "hard",
              "facets": [],
              "filters": {}
            }
          }
        },
        "values": [
          {
            "facet": "AP",
            "searchCriteria": {
              "facets": [
                "board"
              ],
              "filters": {
                "board": [
                  "ts_k-12_2"
                ]
              }
            },
            "primaryFacetFilters": [
              {
                "code": "gradeLevel",
                "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
                "values": [],
                "name": "Class",
                "index": 2
              },
              {
                "code": "medium",
                "translations": "{\"en\":\"Medium\",\"hi\":\"माध्यम\",\"te\":\"మాధ్యమం\",\"ta\":\"மொழி\",\"mr\":\"माध्यम\"}",
                "values": [],
                "name": "Medium",
                "index": 4
              }
            ],
            "aggregate": {
              "groupBy": "subject"
            }
          },
          {
            "facet": "AS",
            "searchCriteria": {
              "facets": [
                "board"
              ],
              "filters": {
                "board": [
                  "as_k-12_5"
                ]
              }
            },
            "primaryFacetFilters": [
              {
                "code": "gradeLevel",
                "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
                "values": [],
                "name": "Class",
                "index": 2
              },
              {
                "code": "medium",
                "translations": "{\"en\":\"Medium\",\"hi\":\"माध्यम\",\"te\":\"మాధ్యమం\",\"ta\":\"மொழி\",\"mr\":\"माध्यम\"}",
                "values": [],
                "name": "Medium",
                "index": 4
              }
            ],
            "aggregate": {
              "groupBy": "subject"
            }
          },
          {
            "facet": "KA",
            "searchCriteria": {
              "facets": [
                "board"
              ],
              "filters": {
                "board": [
                  "ka_k-12_1"
                ]
              }
            },
            "primaryFacetFilters": [
              {
                "code": "gradeLevel",
                "translations": "{\"en\":\"Class\",\"hi\":\"कक्षा\",\"te\":\"క్లాసు\",\"ta\":\"வகுப்பு\",\"mr\":\"इयत्ता\"}",
                "values": [],
                "name": "Class",
                "index": 2
              },
              {
                "code": "medium",
                "translations": "{\"en\":\"Medium\",\"hi\":\"माध्यम\",\"te\":\"మాధ్యమం\",\"ta\":\"மொழி\",\"mr\":\"माध्यम\"}",
                "values": [],
                "name": "Medium",
                "index": 4
              }
            ],
            "aggregate": {
              "groupBy": "subject"
            }
          }
        ],
        "mapping": []
      },
      "theme": {
        "component": "sb-pills-grid",
        "inputs": {
          "pillShape": "default",
          "pillBorder": "rounded"
        },
        "children": {
          "sb-pill-item": {
            "inputs": {
              "icon": "assets/imgs/CBSE.png",
              "theme": {
                "iconBgColor": "#FFFFFF",
                "pillBgColor": "#FFFFFF"
              }
            }
          }
        }
      }
    }
  ]

}
