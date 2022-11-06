import { Database } from '../database'

class ProductGateway extends Database {
    private id!: number
    private name!: string
    private description!: string
    private amount!: number
    private categoryId!: number
    private ownerId!: number
    private close!: boolean

    public setId(id: number) {
        this.id = id
    }

    public setName(name: string) {
        this.name = name
    }

    public setDescription(description: string) {
        this.description = description
    }

    public setAmount(amount: number) {
        this.amount = amount
    }

    public setCategoryId(categoryId: number) {
        this.categoryId = categoryId
    }

    public setOwnerId(ownerId: number) {
        this.ownerId = ownerId
    }

    public setClose(close: boolean) {
        this.close = close
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getDescription() {
       return this.description
    }

    public getAmount() {
       return this.amount
    }

    public getCategoryId() {
        return this.categoryId
    }

    public getOwnerId() {
        return this.ownerId
    }

    public getClose() {
       return this.close
    }

    public async insert(): Promise<number> {
        const data = await this.db.one('insert into product(name, description, amount, category_id, owner_id) values(${name}, ${description}, ${amount}, ${categoryId}, ${ownerId}) returning id', {
            name: this.name,
            description: this.description,
            amount: this.amount,
            categoryId: this.categoryId,
            ownerId: this.ownerId,
        })

        return data.id
    }

    public async update(): Promise<number> {
        const data = await this.db.one('update product set name = ${name}, description = ${description}, amount = ${amount}, category_id = ${categoryId}, owner_id = ${ownerId}, close = ${close} where id = ${id} returning id', {
            id: this.id,
            name: this.name,
            description: this.description,
            amount: this.amount,
            categoryId: this.categoryId,
            ownerId: this.ownerId,
            close: this.close,
        })

        return data.id
    }
}

export {
    ProductGateway,
}