
## 첫 번째로 제출한 정답

```sql
SELECT firstName, lastName, Address.city, Address.state
FROM Person
LEFT JOIN Address
    ON Person.personId = Address.personId
```

정답 제출 했더니 제출할 때 마다 최적화 성능이 다르네 뭘까...

1차 제출: 하위권 13%
2차 제출: 하위권 46%