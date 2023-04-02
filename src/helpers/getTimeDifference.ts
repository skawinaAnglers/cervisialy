import dayjs from 'dayjs'

export const getTimeDifference = (time: number): string => {
	const dateNow = dayjs()
	const dateThen = dayjs(time)

	if (dateNow.diff(dateThen, 's') < 60) {
		return `${dateNow.diff(dateThen, 's')}s ago`
	}

	if (dateNow.diff(dateThen, 'm') < 60) {
		return `${dateNow.diff(dateThen, 'minute')}min ago`
	}

	if (dateNow.diff(dateThen, 'h') < 24) {
		return `${dateNow.diff(dateThen, 'hour')}h ago`
	}

	if (dateNow.diff(dateThen, 'day') < 3) {
		return `${dateNow.diff(dateThen, 'day')}day ago`
	}

	return dateThen.format('DD/MM/YYYY')
}