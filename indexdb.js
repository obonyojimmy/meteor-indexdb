Idb = {}

const DB_NAME = '_meteor_pwa'
const DB_VERSION = 1

async function getStorageVersion () {
  const dbs = await indexedDB.databases()
  const db = dbs && dbs.find(({ name }) => name === DB_NAME)
  return db?.version || DB_VERSION
}

async function initDB (storeName, ver) {

}
