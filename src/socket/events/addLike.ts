import { WebAnalytics } from '../../models'
import type { SocketData, AnalyticsEventsProps } from '../../types'

export async function addLikeEvent (socket: SocketData, { id, browserID }: AnalyticsEventsProps) {
  const origin = socket.handshake.headers.origin ?? 'none'

  const updateConfig = [
    { $inc: { likes: 1 } },
    { new: true }
  ]
  const byOrigin = id === undefined
  const schemaMethod = byOrigin ? WebAnalytics.findOneAndUpdate({ origin }, ...updateConfig) : WebAnalytics.findByIdAndUpdate(id, ...updateConfig)
  const Analytics = await schemaMethod

  if (Analytics === null) {
    socket.emit('analytics', undefined)
    return
  }

  const browser = Analytics.browsers.find(b => b.id === browserID)

  if (browser === undefined) {
    Analytics.browsers.push({
      id: browserID,
      liked: true,
      lastVisitAt: Date.now()
    })
    Analytics.save()
    return
  }

  browser.liked = true

  socket.emit('analytics', Analytics)
  Analytics.save()
}
