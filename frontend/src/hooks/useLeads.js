import { useCallback, useEffect, useRef, useState } from "react";
import { createLead, getLeads } from "../api/leadsApi";

const POLL_INTERVAL_MS = 15000

export function useLeads() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isFetchingRef = useRef(false)

  const refresh = useCallback(async () => {
    if (isFetchingRef.current) return
    isFetchingRef.current = true
    try {
      const data = await getLeads()
      setLeads(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      isFetchingRef.current = false
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
    const intervalId = setInterval(refresh, POLL_INTERVAL_MS)
    return () => clearInterval(intervalId)
  }, [refresh])

  const addLead = useCallback(async (payload) => {
    const createdLead = await createLead(payload)
    setLeads((current) => [...current, createdLead])
    return createdLead
  }, [])

  return { leads, loading, error, refresh, addLead }
}
