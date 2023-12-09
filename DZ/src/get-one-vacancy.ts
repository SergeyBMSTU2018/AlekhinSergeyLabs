import fs from 'fs'

import axios from 'axios'

import { api } from './api'

const DIR = './batch'
const BATCH_COUNT = 20
const LIST_COUNT = 100

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Получить одну вакансию
 */
const fetchData = async (id: number): Promise<any | null> => {
	try {

		const { data } = await api.vacancies.getVacancy(String(id))

		return data
	} catch {
		return null
	}
}

/**
 * Получаем массив вакансий
 */
const getBatch = async (first: number, last: number): Promise<any[]> => {
	const batch = []
	const batchSize = last - first + 1

	for (let i = 0; i < batchSize; i++) {
		const id = first + i
		console.log('batch.', 'id', id)

		batch.push(fetchData(id))
	}

	const data = await Promise.all(batch)
	return data.filter((el) => el && !el.errors)
}

/**
 * Получаем пачку вакансий
 */
const getList = async (first: number, last: number): Promise<any[]> => {
	const list = []

	for (let i = first; i < last; i = i + BATCH_COUNT) {
		const [firstId, lastId] = [i, i + BATCH_COUNT - 1]
		console.log('list.', 'first:', firstId, 'last:', lastId)

		const data = await getBatch(firstId, lastId)
		if (!data.length) continue

		list.push(...data)
	}

	return list
}

const runList = async (first: number, last: number) => {
	for (let i = first; i < last; i = i + LIST_COUNT) {
		const [firstId, lastId] = [i, i + LIST_COUNT - 1]
		console.log('file.', 'first:', firstId, 'last:', lastId)

		const list = await getList(firstId, lastId)
		if (!list.length) continue

		const listDir = `${DIR}/${firstId}-${lastId}`
		fs.mkdirSync(listDir, { recursive: true })

		list.forEach((el) => {
			fs.writeFileSync(`${listDir}/${el.id}.json`, JSON.stringify(el, null, 2))
		})

		console.log('list:', list.length)

		await sleep(3000)
	}
}

const run = async () => {
	const first = 1
	const last = 1_000_000

	await runList(first, last)
}

run()
