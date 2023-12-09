import { schedule } from '../../configs/dictionaries.json'

export const SCHEDULE = schedule

export const SCHEDULE_IDS = schedule.map(({ id }) => id)

export function getScheduleStr(id: typeof schedule[number]['id']): string {
	return `schedule=${id}`
}
