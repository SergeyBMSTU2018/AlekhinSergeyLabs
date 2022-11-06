import { Database } from '../database'
import { CategoryGateway } from './gateway'

class CategoryFinder extends Database {
    async findById(id: number): Promise<CategoryGateway[]> {
        const data = await this.db.any('select id, title from category where id = ${id}', {
            id,
        })

        return data.map(({ id, title}) => {
            const pg = new CategoryGateway()
            pg.setId(id)
            pg.setTitle(title)

            return pg
        })
    }
}

export {
    CategoryFinder,
}