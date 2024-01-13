import { Socket } from 'socket.io'
import { APP_ID } from '../../config'
import { WebAnalytics } from '../../models'

export const addLikesEvent = async (socket: Socket) => {
  const portfolio = await WebAnalytics.findById(APP_ID)
  if(portfolio?.likes){
    portfolio.likes++
    socket.broadcast.emit('like', portfolio.likes)
    await portfolio.save()
    
  }else socket.broadcast.emit('like', 0)
}