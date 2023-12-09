import fs from 'fs'

import axios from 'axios'

import { PROFESSIONAL_ROLES_IDS } from './configs'

const DIR = './professional-roles'
const BATCH_COUNT = 20
const REQUEST_RANGE = 100

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchData = async (page: number, professionalRoleIndex: number): Promise<any | null> => {
	try {
		const { data } = await axios.post(`https://api.hh.ru/vacancies?per_page=${REQUEST_RANGE}&page=${page}&professional_role=${professionalRoleIndex}`)

		return data
	} catch (err) {
		if (err.response.status === 403) {
			throw new Error('capture required')
		}

		return null
	}
}

const getBatch = async (professionalRoleIndex: number): Promise<any[]> => {
	const batch = []

	for (let i = 0; i < BATCH_COUNT; i++) {
		console.log('batch.', 'page:', i)

		batch.push(fetchData(i, professionalRoleIndex))
	}

	const data = await Promise.all(batch)
	return data.reduce((acc, it) => [...acc, ...it.items], [])
}

const getList = async (startIndex: number) => {
	for (let i = startIndex; i < PROFESSIONAL_ROLES_IDS.length; i++) {
		console.log('list.', 'index:', i, ', id:', PROFESSIONAL_ROLES_IDS[i])

		const data = await getBatch(i)
		if (!data.length) continue

		const listDir = `${DIR}/${i}`
		fs.mkdirSync(listDir, { recursive: true })

		data.forEach((el) => {
			fs.writeFileSync(`${listDir}/${el.id}.json`, JSON.stringify(el, null, 2))
		})

		console.log('list:', data.length)

		await sleep(3000)
	}
}

const run = async () => {
	await getList(0)
}

run()
