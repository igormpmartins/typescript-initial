import Express from 'express'

const app = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
    res.send('teste')
})

app.listen(3000, () => {
    console.log('running on port ', 3000)
})
