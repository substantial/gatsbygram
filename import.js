const exec = require('child_process').exec
const fs = require('fs')

const username = process.argv[2]
const dataDir = process.argv[3]

if (!username || !dataDir) {
  console.log(
    `
You didn't supply an Instagram username or data directory!
Run this command like:

node import.js INSTAGRAM_USERNAME DATA_DIR
    `
  )
  process.exit()
}

exec(`rm -rf data/images`)
exec(`mkdir data/images`)
exec(`cp -R ${dataDir}/photos/* data/images`)

let posts = []

const rawProfileData = fs.readFileSync(`${dataDir}/profile.json`)
const profile = JSON.parse(rawProfileData)
const avatar = profile.profile_pic_url

const rawMediaData = fs.readFileSync(`${dataDir}/media.json`)
const media = JSON.parse(rawMediaData);

media.photos.forEach((photo, index) => {
  posts.push({
    id: index.toString(),
    time: photo.taken_at,
    likes: 2,
    text: photo.caption,
    image: photo.path.replace('photos/', 'images/'),
    username,
    avatar,
  })
})

fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, ``, 2))
