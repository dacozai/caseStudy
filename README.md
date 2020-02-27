# Validus Case Study


## Directory Structure

    .
    ├── ..
    ├── serverManager                   # Application
    │   ├── client                      # frontend folder
    │   │   ├── migrations              # (frontend doesn'y use) 
    │   │   ├── src                     # React files
    │   │   │   ├── actions             # actions for reducers
    │   │   │   ├── components          # Components
    │   │   │   ├── images              # iCon image
    │   │   │   ├── reducers            # reducers
    │   │   │   └── styles              # SASS files
    │   │   ├── static                  # output main.js for Django
    │   │   ├── template                # index.html
    │   │   └── rest files     
    │   ├── server                      # server folder
    │   │   ├── migrations              # migration resources
    │   │   ├── api.py                  # ViewSet
    │   │   ├── models.py               # ORM models
    │   │   ├── serializers.py          # serializers
    │   │   ├── urls.py                 # url register
    │   │   └── rest files     
    │   └── serverManager               # Setting for backend server
    ├── venv                            # Python virtual tool 
    ├── node_modules                    # JS packages
    └── README.md                       # README

## Usage Instructions
```bash
git clone https://github.com/dacozai/caseStudy.git
cd caseStudy
# Directory: path/caseStudy/serverManager
cd serverManager && python manage.py runserver 
# Open new window for frontend
# Directory: path/caseStudy
cd .. && yarn run dev 
```

## Design Ideas
I pick React and Django because those are the tech stack in the Validus. Besides, what I have learned before is very different from those two. Therefore, I force myself to learn and build up the entire project in these two library and framework. However, developing Django encountered fatal issues. I am aware of that many solutions written in React could be solved through Django ORM easily. Another idea is that I could integrate Django with GraphQL to deal with endpoint query problems in React. However, if I use GraphQL, it might be relevant to the current architecture in the compnay.


## Agile Methodology - Kanban
This is the [link](https://trello.com/b/pXSrucTg) from Trello that I manage to build up this case study through React and Django.

## Time Spent
Actual working hours: around  30 HRs in 7 days
Total working hours: more than 60 HRs

Note, in the beginning, I decide to use the tech stack that I am not familiar with React and Django. I spent lots of time on studying Django. However, I didn't get a good result for building up the website. After realising the mechanism of React, I get the website done quickly. However, with the proper knowledge of Django, the work could be done in more beautiful way. 
