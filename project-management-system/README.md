This is a web application created using Django and Bootstrap 5. The project is designed for managing
projects, clientsfor this case team members, and tasks. The database used  is SQLite3.


CRUD Operations: The system supports Create, Read, Update, and Delete operations for
    projects, team members, and tasks

Filtering: Utilizes Django Filters to allow filtering of project and team members data.

Django Forms: Includes forms for creating and updating projects, team members, and tasks.




before you do any of this make sure you are in the root directory

1. Install project dependencies:
    pip install -r requirements.txt



2. Migrate the database (SQLite3):
    python manage.py makemigrations
    python manage.py migrate


3. Create a superuser to access the admin interface:
    python manage.py createsuperuser

    or user this credetials to access the admin panel and log in once you have started the server

    http://localhost:8000/admin/

    username=       Admin
    password:       admin


4. Run the development server:
    python manage.py runserver



Access the web application in your browser by navigating to http://localhost:8000/.





project_ms/: Contains the Django project settings and configuration.
project/: The main Django app for managing projects, team members, and tasks.
project/templates/: HTML templates for rendering views. inside   project/ directory

requirements.txt: Lists project dependencies.

note
This project is compatible with Python 3.8 or later.





for users use open privatge window and use this details tgo test

    http://127.0.0.1:8000/
username        password
user1           7776linux
user2           7776linux
user3           7776linux

i kep password same for ease of testing

