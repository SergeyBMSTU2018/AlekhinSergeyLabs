import { AbstractDatabase } from '../database'

class CategoryGateway extends AbstractDatabase {
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