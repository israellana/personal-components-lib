export default function handler(req:any, res:any) {
    res.status(200).json([
        {
            name: 'Class test',
            amount_videos: 20,
            owner: 'Robert Tank'
        }
    ])
}