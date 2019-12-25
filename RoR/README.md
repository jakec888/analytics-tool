
# Instructions (React on Rails)

1. go into the RoR folder
```
cd RoR
```

2. install dependencies 
```
bundle install

cd client
npm install
```

3. AWS auth
```
amplify init
amplify add auth (if you dont have a AWS amplify project)
```

4. run both front-end and back-end servers
```
cd ..
RoR/$ rake start
```