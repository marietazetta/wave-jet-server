## Wave-Jet
#### AUTH routes

| HTTP Verb | URL     | Request Body                | Action Body                |
| :-------- | :------- | :------------------------- | -------
| `POST` | /signup | JSON | Sign Up user             |
| `POST` | /login | JSON | Login user           |
| `GET` | /verify | JSON | Verify user token          |


#### AIRCRAFTS 

| HTTP Verb| URL   |  Request Body             | Action
| :-------- | :------- | :------------ | :------------- | 
| `POST` | /aircrafts| JSON| Creates a new aircraft | 
| `GET`| /aircrafts| (empty)| Returns all the aircrafts| 
| `GET`| /aircrafts/:aircraftId| (empty)| Returns the spcecified aircraft| 
| `PUT`| /aircrafts/:aircraftId| JSON| Edits the spcecified aircraft| 
| `DELETE`| /aircrafts/:aircraftId | (empty)| Deletes the spcecified aircraft |

#### FLIGHTS

| HTTP Verb| URL   |  Request Body             | Action
| :-------- | :------- | :------------ | :------------- | 
| `POST` | /routes| JSON| Creates a new aircraft | 
| `GET`| /routes| (empty)| Returns all the aircrafts| 
| `GET`| /routes/:routesId| (empty)| Returns the spcecified aircraft| 
| `PUT`| /routes/:routesId| JSON| Edits the spcecified aircraft| 
| `DELETE`| /routes/:routesId | (empty)| Deletes the spcecified aircraft |


#### PATHS
| Path| Description  | 
| :-------- | :------- | 
| `/`| Homepage|
| `/signup`| Sign Up| 
|`/login`| Log In| 
| `/flights/details` | Visualize routes details |
| `/aircraft/details` | Visualize aircraft details |
| `/about us` | Visualize aircraft details |
| `/contact us` | Visualize aircraft details |
| `*` | 404 |



#### ESCALATION PATHS
| Path| Description  | 
| :-------- | :------- | 
|`/profile`| Add or Edit your personal data|
|`/bookings`| Visualize all bookings|


