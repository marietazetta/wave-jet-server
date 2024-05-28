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
|`/profile`| Add or Edit your personal data|

| Path| Description  | 
| :-------- | :------- | 
| `/flights/:flightId` | Visualize flights details |
| `/flights/edit/:flightId` | Edit flights details |

| Path| Description  | 
| :-------- | :------- | 
|`/fleet`| Visualize current aircraft fleet| 
| `/fleet/:aircraftId` | Visualize fleet details |
| `/fleet/edit/:aircraftId` | Edit fleet details |

| Path| Description  | 
| :-------- | :------- | 
| `/about us` | About us details |
| `*` | 404 |



#### ESCALATION PATHS
| Path| Description  | 
| :-------- | :------- | 
|`/bookings`| Visualize all bookings|


