import { AbstractDatabase } from '../database'
import { ProductGateway } from './gateway'

class ProductFinder extends AbstractDatabase {
    public async findById(id: number): Promise<ProductGateway[]> {
        const data = await this.db.any('select id, name, description, amount, category_id, owner_id, close from products where id = ${id}', {
            id,
        })

        return data.map(({ id, name, description, amount, category_id, owner_id, close }) => {
            const pg = new ProductGateway()
            pg.setId(id)
            pg.setName(name)
            pg.setDescription(description)
            pg.setAmount(amount)
            pg.setCategoryId(category_id)
            pg.setOwnerId(owner_id)
            pg.setClose(close)

            return pg
        })
    }
}

export {
    ProductFinder,
}