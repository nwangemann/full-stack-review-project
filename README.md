# **Full Stack Review** /w Database!


## Unbeméméable

<ul>
MVP (minimum viable product): 
<li>Login functionality</li>
<li>Post memes</li>
<li>Full CRUD (delete, edit)</li>
<li>users can rate memes</li>
</ul>

ICEBOX
- sliding into DM's


***Client***
<br/><br/>
*dependencies*
- axios
- react-router-dom
- redux
- react-redux
- redux-promise-middleware
- http-proxy-middleware
<br/>

*routes*
- home(/)
- profile(/profile)
- login(/login)
- account(/account)

*file structure*
- src/
    - App.js
    - App.css
    - index.js
    - reset.css
    - redux
        - store
        - reducer 
    - Components/
        - Header.js /.css
        - Login.js /.css
        - Account.js /.css
        - Main.js /.css
    - setUpProxy.js

***Server*** 
<br/>
*dependencies*
- express-session
- massive 
- express
- dotenv
- bcrypt

*endpoints*
<br/>

auth:
- login: => /auth/login
- register: => /auth/register
- logout: => /auth/logout
- userSession: => /auth/user_session
<br/>

memeCtrl:
- (app.get) getAllMemes: => /api/get_memes
- (app.post) postMeme: => /api/post
- (app.delete) deleteMeme: => /api/delete_meme/:id
- (app.put) addComment: => /api/add_comment/:id
- (app.put) editRating: => /api/edit_rating/:id

***Database***

#### User
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password TEXT NOT NULL,
    email VARCHAR(50) NOT NULL,
    profile_pic TEXT DEFAULT 'https://i.insider.com/5b169a601ae6624f008b48dd?width=1100&format=jpeg&auto=webp'
);

INSERT INTO users(username, password, email)
VALUES 
('carlos123', '123', 'calos@123.net')
('frodo_b', 'dotheygandalf', 'wraithbait@onering.me');

```

#### Meme
```sql
CREATE TABLE memes (
    meme_id SERIAL PRIMARY KEY,
    image_url TEXT NOT NULL,
    rating INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO memes (image_url, user_id)
VALUES
('https://images7.memedroid.com/images/UPLOADED163/558354a59c113.jpeg', 2),
('https://i.redd.it/mxm3itpzl2i41.jpg', 1),
('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F271%2F161%2Fd9e.jpg&imgrefurl=https%3A%2F%2Fknowyourmeme.com%2Fphotos%2F1271161-star-trek&tbnid=Ipd6oUVz5dn5nM&vet=12ahUKEwilmJv12ODnAhWBGTQIHVU3BE8QMygFegUIARDlAQ..i&docid=OjLgproUG8x6TM&w=600&h=403&q=memes%20star%20strek&client=safari&ved=2ahUKEwilmJv12ODnAhWBGTQIHVU3BE8QMygFegUIARDlAQ', 1);
```

#### Comments

```sql
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INT REFERENCES users(user_id),
    meme_id INT REFERENCES memes(meme_id)
);

INSERT INTO comments (comment, user_id, meme_id)
VALUES
('Lol, lookit my face, it is all messed up', 2, 2),
('Nah bruh, it aint that bad', 1, 2);
```