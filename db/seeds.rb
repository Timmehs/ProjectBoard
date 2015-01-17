# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



# Demogogue
p1 = Project.create({
  uid: 27141936,
  name: 'Demogogue',
  owner_id:  4,
  html_url: "https://github.com/Timmehs/Demogogue",
  homepage: 'http://www.demogogue.com',
  description:  "Music sharing for musicians inspired by Soundcloud. Built with rails, backbone, and jquery.",
  stargazers: 0,
  watchers: 0,
  })

# disAsteroids

p2 = Project.create({
  uid: 26470255,
  name: 'disAsteroids',
  owner_id:  4,
  html_url: "https://github.com/Timmehs/disAsteroids",
  homepage: 'http://www.timsandberg.com/disAsteroids',
  description:  "An homage to the classic Asteroids using HTML5 Canvas and javascript",
  stargazers: 0,
  watchers: 0,
  })

p3 = Project.create({
  uid: 17999323,
  name: 'LoginList',
  owner_id:  4,
  html_url: "https://github.com/Timmehs/LoginList",
  homepage: 'http://www.demogogue.com',
  description:  "A simple exercise using Facebook SDK 3.7.\nPrimary functions are to log in through FB\nand display a list of friends using a custom built listview.",
  stargazers: 0,
  watchers: 0,
  })
p4 = Project.create({
  uid: 28905791,
  name: 'nagChat',
  owner_id:  4,
  html_url: "https://github.com/Timmehs/nagChat",
  homepage: 'http://nagchat.herokuapp.com',
  description: "Nag at your friends and loved ones through this node.js app!",
  stargazers: 0,
  watchers: 0,
  });
