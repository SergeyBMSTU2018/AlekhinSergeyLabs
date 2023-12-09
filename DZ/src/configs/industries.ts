import industries from '../../configs/industries.json'

export const INDUSTRIES = industries

export function getIndustriesStr(id: typeof industries[number]['id'] | typeof industries[number]['industries'][number]['id']): string {
	return `industry=${id}`
}
