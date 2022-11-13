import { AbstractDatabase } from '../database'

class UserGateway extends AbstractDatabase {
    private id!: number
    private name!: string
    private surname!: string
    private email!: string
    private telephone!: string
    private password!: string

    public setId(id: number): void {
        this.id = id
    }

    public setName(name: string): void {
        this.name = name
    }

    public setSurname(surname: string): void {
        this.surname = surname
    }

    public setEmail(email: string): void {
        this.email = email
    }

    public setTelephone(telephone: string): void {
        this.telephone = telephone
    }

    public setPassword(password: string): void {
        this.password = password
    }

    public getId(): number {
        return this.id
    }

    public getPassword(): string {
        return this.password
    }

    public async insert(): Promise<number> {
        const data = await this.db.one('insert into users(name, surname, email, telephone, password) values(${name}, ${surname}, ${email}, ${telephone}, ${password}) returning id', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            telephone: this.telephone,
            password: this.password,
        })

        return data.id
    }
}

export {
    UserGateway,
}