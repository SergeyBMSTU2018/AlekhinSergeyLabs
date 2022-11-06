import { Database } from '../database'

class CategoryGateway extends Database {
    private id!: number
    private title!: string

    public setId(id: number): void {
        this.id = id
    }

    public setTitle(title: string): void {
        this.title = title
    }
}

export {
    CategoryGateway,
}