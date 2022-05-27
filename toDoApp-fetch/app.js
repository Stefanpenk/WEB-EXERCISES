// console.log(process.argv.slice(2, 3));

import parseArgs from 'minimist';
import colors from 'colors';
import fs from 'fs';

const command = parseArgs(process.argv.slice(2, 3));
delete command._
console.log(command);

const handleCommand = ({
  add,
  remove,
  list
}) => {
  if (add) {
    if (typeof add !== 'string') {
      return console.log('write name for task as a string'.red);
    } else if (add.length < 7) {
      return console.log('task name is too short. Should be at least 7 chars'.red);
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== 'string' || remove.length < 7) {
      return console.log('write task name you want to remove. Must be text and with more than 6 chars.'.red);
    }
    handleData(2, remove);
  } else if (list || list === '') {
    handleData(3, null);
  } else {
    console.log("don't understand. Use --add='task name', --remove='task name' or --list".red);
  }
}

const handleData = (type, title) => {
  //type- number (1- add, 2- remove, 3- list)
  //title (string || null)

  const data = fs.readFileSync('datadb.json');
  const tasks = JSON.parse(data)
  console.log(tasks);

  if (type === 1 || type === 2) {
    const isExisted = tasks.find(task => task.title === title) ? true : false;
    if (type === 1 && isExisted) {
      return console.log('task already exists'.red);
    } else if (type === 2 && !isExisted) {
      return console.log('task does not exists I cant remove it'.red);
    }
  }

  let dataJSON = '';
  switch (type) {
    case 1:
      // console.log('task added');
      const id = tasks.length + 1;
      tasks.push({
        id,
        title
      });
      dataJSON = JSON.stringify(tasks);
      fs.writeFileSync('datadb.json', dataJSON);
      console.log(`adding task: ${title}`.white.bgGreen);
      break;

    case 2:
      const index = tasks.findIndex(task => task.title === title)
      tasks.splice(index, 1)
      console.log(tasks);
      dataJSON = JSON.stringify(tasks)
      fs.writeFile('data.json', dataJSON, 'utf8', (err) => {
        if (err) throw err;
        console.log(`task ${title} has been deleted`.white.bgGreen);
      })
      break;

    case 3:
      console.log(`task lists has ${tasks.length} positions. To do:`);
      if (tasks.length) {
        tasks.forEach((task, index) => {
          if (index % 2) return console.log(task.title.green);
          return console.log(task.title.yellow);
        })
      }
      break;
  }
}
handleCommand(command);