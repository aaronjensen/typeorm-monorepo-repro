const {createConnection} = require('typeorm')

const main = async () => {
  try {
    await createConnection()
  } catch (e) {
    console.error(e)
  }
}

main()
