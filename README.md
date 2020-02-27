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
cd serverManager && python manage.py runserver # path/caseStudy/serverManager
# Open new window for frontend
cd .. && yarn run dev # path/caseStudy
```


## Agile Methodology - Kanban
This is the [link](https://trello.com/b/pXSrucTg) from Trello that I manage to build up this case study through React and Django.



