import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer, Loading, ChartsContainer } from '../../components'


const Stats = () => {
    const { ShowStats, isLoading, monthlyApplications } = useAppContext()

    useEffect(() => {
        ShowStats()
    }, [])

    if (isLoading) {
        return <Loading center />
    }

    return <>
        <StatsContainer />
        {monthlyApplications.length > 0 && <ChartsContainer />}

    </>

}
export default Stats