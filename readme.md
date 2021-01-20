# Project prerequisite
- Python(Any version 3+)
- NPM
- Any text editor you prefer.
---
## Setting up Virtual Env 
- Create a directory in your machine and redirect there using terminal.
- virtualenv env
- .\env\Scripts\activate
---
## Cloning Git repository
- git clone https://github.com/IlmanAhmad/Wall-App.git
---
## Run the following commands to get started:
### Backend - Django
- Change the repository to Wall-App in terminal.
- pip install -r requirements.txt
- python manage.py createsuperuser
- python manage.py runserver

### Frontend - React
- Change the repository to ipostappfrontend inside Wall-App in terminal.
- npm install
---
### Testing
- http://localhost:3000/ -> React
- http://localhost:8000/admin -> Django Admin

### PS-Update the values of EMAIL_HOST_USER and EMAIL_HOST_PASSWORD in settings.py to test welcome email 