const db = require('../db')
const { Pant, Short, Shirt } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const pant1 = await new Pant ({
        waist_size: "34",
        length_size: "34",
        color: "blue"
    })
    pant1.save()

    const pant2 = await new Pant ({
        waist_size: "32",
        length_size: "32",
        color: "red"
    })
    pant2.save()

    const pant3 = await new Pant ({
        waist_size: "40",
        length_size: "34",
        color: "blue"
    })
    pant3.save()

    const short1 = await new Short ({
        size: "small",
        color: "blue"
    })
    short1.save()

    const short2 = await new Short ({
        size: "medium",
        color: "yellow"
    })
    short2.save()

    const short3 = await new Short ({
        size: "large",
        color: "red"
    })
    short3.save()

    const shirt1 = await new Shirt ({
        size: "small",
        color: "yello"
    })
    shirt1.save()

    const shirt2 = await new Shirt ({
        size: "medium",
        color: "red"
    })
    shirt2.save()

    const shirt3 = await new Shirt ({
        size: "large",
        color: "blue"
    })
    shirt3.save()




}
const run = async () => {
    await main()
    db.close()
  }
  
  run()