import fs from 'fs'

import axios from 'axios'

const fetchData = async (): Promise<any | null> => {
	try {
		const { data } = await axios.get('https://api.hh.ru/industries')

		return data
	} catch {
		return null
	}
}

const run = async () => {
	const d = await fetchData()

	fs.writeFileSync('industries.json', JSON.stringify(d, null, 2))
}

run()
