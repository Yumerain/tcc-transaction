export const tableData = [
  {
    "domain": "TCC:HTTP:CAPITAL:JEDIS:",
    "status": "3",
    "transactionType": "2",
    "retriedCount": "8",
    "createTime": "2020-09-23 10:14:46",
    "lastUpdateTime": "2020-09-23 14:32:08",
    "contentView": "{\"attachments\":{},\"createTime\":1600827286514,\"lastUpdateTime\":1600842728633,\"participants\":[{\"cancelInvocationContext\":{\"args\":[{\"attachments\":{},\"status\":3,\"xid\":{\"branchQualifier\":\"JoePxPfzSJe7dV7u1Tvkrg==\",\"formatId\":1,\"globalTransactionId\":\"wraZbZBPT9+OaGTVEkbq2Q==\"}},{\"amount\":2277,\"merchantOrderNo\":\"b3ae34e5864e44f5be03884911b457e5\",\"oppositeUserId\":1000,\"orderTitle\":\"order no:b3ae34e5864e44f5be03884911b457e5\",\"selfUserId\":2000}],\"methodName\":\"cancelRecord\",\"parameterTypes\":[\"org.mengyun.tcctransaction.api.TransactionContext\",\"org.mengyun.tcctransaction.sample.http.capital.api.dto.CapitalTradeOrderDto\"],\"targetClass\":\"org.mengyun.tcctransaction.sample.http.capital.api.CapitalTradeOrderService\"},\"confirmInvocationContext\":{\"args\":[{\"$ref\":\"$.participants[0].cancelInvocationContext.args[0]\"},{\"$ref\":\"$.participants[0].cancelInvocationContext.args[1]\"}],\"methodName\":\"confirmRecord\",\"parameterTypes\":[\"org.mengyun.tcctransaction.api.TransactionContext\",\"org.mengyun.tcctransaction.sample.http.capital.api.dto.CapitalTradeOrderDto\"],\"targetClass\":\"org.mengyun.tcctransaction.sample.http.capital.api.CapitalTradeOrderService\"},\"xid\":{\"branchQualifier\":\"JoePxPfzSJe7dV7u1Tvkrg==\",\"formatId\":1,\"globalTransactionId\":\"wraZbZBPT9+OaGTVEkbq2Q==\"}}],\"retriedCount\":8,\"status\":\"CANCELLING\",\"transactionType\":\"BRANCH\",\"version\":20,\"xid\":{\"branchQualifier\":\"RTk/QVFZTW6fvDaB9GdiNQ==\",\"formatId\":1,\"globalTransactionId\":\"wraZbZBPT9+OaGTVEkbq2Q==\"}}",
    "globalTxId": "48ba7a08-ecb8-3ecb-824a-6c003027fbd5",
    "branchQualifier": "880de205-2a42-3a1e-b09d-abc88b2488fe"
  }
]

export const selectData = [{
  "label": "AGG:CLE:",
  "children": [{
    "label": "redis://192.168.3.220:6381/10",
    "value": "redis://192.168.3.220:6381/10"
  }],
  "value": "AGG:CLE:"
}, {
  "label": "AGG:FPA:",
  "children": [{
    "label": "redis://192.168.3.220:6381/8",
    "value": "redis://192.168.3.220:6381/8"
  }],
  "value": "AGG:FPA:"
}, {
  "label": "AGG:TAX:",
  "children": [{
    "label": "redis://192.168.3.220:6379/47",
    "value": "redis://192.168.3.220:6379/47"
  }],
  "value": "AGG:TAX:"
}, {
  "label": "AGG:CLE2:",
  "children": [{
    "label": "redis://192.168.3.220:6379/49",
    "value": "redis://192.168.3.220:6379/49"
  }],
  "value": "AGG:CLE2:"
}, {
  "label": "AGG:ORDxx",
  "children": [{
    "label": "redis://192.168.3.220:6379/9",
    "value": "redis://192.168.3.220:6379/9"
  }],
  "value": "AGG:ORDxx"
}, {
  "label": "AGG:PRICECENTER:",
  "children": [{
    "label": "redis://192.168.3.220:6379/10",
    "value": "redis://192.168.3.220:6379/10"
  }],
  "value": "AGG:PRICECENTER:"
}, {
  "label": "AGG:MARKETING_RISK_ADMIN:v01:",
  "children": [{
    "label": "redis://192.168.3.220:6379/40",
    "value": "redis://192.168.3.220:6379/40"
  }],
  "value": "AGG:MARKETING_RISK_ADMIN:v01:"
}];
