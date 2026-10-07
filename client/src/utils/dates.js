const formatTime = (time) => {
    if (!time) return ''
    const [hours, minutes] = time.split(':')
    const h = parseInt(hours)
    return `${h % 12 || 12}:${minutes} ${h >= 12 ? 'PM' : 'AM'}`
}

const formatRemainingTime = (remaining) => {
    if (!remaining) return ''
    const diff = new Date(remaining) - new Date()
    const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24))
    return diff >= 0 ? `${days} days remaining` : `${days} days ago`
}

const formatNegativeTimeRemaining = (remaining, id) => {
    const element = document.getElementById(`remaining-${id}`)
    if (element && remaining.includes('ago')) {
        element.style.color = 'red'
    }
}

export default { formatTime, formatRemainingTime, formatNegativeTimeRemaining }