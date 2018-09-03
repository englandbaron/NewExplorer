angular.module('insight').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de_DE', {"404 Page not found :(":"404 Seite nicht gefunden :(","Address":"Adresse","Application Status":"Programmstatus","Block":"Block","Blocks":"Blöcke","Can't connect to bitcoind to get live updates from the p2p network. (Tried connecting to bitcoind at {{host}}:{{port}} and failed.)":"Es ist nicht möglich mit Bitcoind zu verbinden um live Aktualisierungen vom P2P Netzwerk zu erhalten. (Verbindungsversuch zu bitcoind an {{host}}:{{port}} ist fehlgeschlagen.)","Can't connect to insight server. Attempting to reconnect...":"Keine Verbindung zum insight-Server möglich. Es wird versucht die Verbindung neu aufzubauen...","Can't connect to internet. Please, check your connection.":"Keine Verbindung zum Internet möglich, bitte Zugangsdaten prüfen.","Complete":"Vollständig","Confirmations":"Bestätigungen","Connections to other nodes":"Verbindungen zu Nodes","Current Sync Status":"Aktueller Status","Details":"Details","Error!":"Fehler!","Fee":"Gebühr","Final Balance":"Schlussbilanz","Finish Date":"Fertigstellung","Go to home":"Zur Startseite","Height":"Höhe","Included in Block":"Eingefügt in Block","Initial Block Chain Height":"Ursprüngliche Blockchain Höhe","Input":"Eingänge","Latest Blocks":"Letzte Blöcke","Loading Address Information":"Lade Adressinformationen","Loading Block Information":"Lade Blockinformation","Loading Selected Date...":"Lade gewähltes Datum...","Loading Transaction Details":"Lade Transaktionsdetails","Loading Transactions...":"Lade Transaktionen...","Loading...":"Lade...","Next Block":"Nächster Block","No blocks yet.":"Keine Blöcke bisher.","No matching records found!":"Keine passenden Einträge gefunden!","No. Transactions":"Anzahl Transaktionen","Number Of Transactions":"Anzahl der Transaktionen","Output":"Ausgänge","Previous Block":"Letzter Block","Protocol version":"Protokollversion","Received Time":"Eingangszeitpunkt","Redirecting...":"Umleitung...","See all blocks":"Alle Blöcke anzeigen","Size":"Größe","Size (bytes)":"Größe (bytes)","Start Date":"Startdatum","Status":"Status","Summary":"Zusammenfassung","Sync Progress":"Fortschritt","Sync Status":"Syncronisation","Sync Type":"Art der Syncronisation","Synced Blocks":"Syncronisierte Blöcke","There are no transactions involving this address.":"Es gibt keine Transaktionen zu dieser Adressse","Time Offset":"Zeitoffset zu UTC","Timestamp":"Zeitstempel","Today":"Heute","Transaction":"Transaktion","Transactions":"Transaktionen","Unconfirmed":"Unbestätigt","Unconfirmed Transaction!":"Unbestätigte Transaktion!","Unconfirmed Txs Balance":"Unbestätigtes Guthaben","Version":"Version","Waiting for blocks...":"Warte auf Blöcke...","Waiting for transactions...":"Warte auf Transaktionen..."});
    gettextCatalog.setStrings('en', {"Unconfirmed Transaction!":"Unconfirmed"});
    gettextCatalog.setStrings('es', {"404 Page not found :(":"404 Página no encontrada :(","Address":"Dirección","Application Status":"Estado de la Aplicación","Block":"Bloque","Blocks":"Bloques","Can't connect to bitcoind to get live updates from the p2p network. (Tried connecting to bitcoind at {{host}}:{{port}} and failed.)":"No se pudo conectar a bitcoind para obtener actualizaciones en vivo de la red p2p. (Se intentó conectar a bitcoind de {{host}}:{{port}} y falló.)","Can't connect to insight server. Attempting to reconnect...":"No se pudo conectar al servidor insight. Intentando re-conectar...","Can't connect to internet. Please, check your connection.":"No se pudo conectar a Internet. Por favor, verifique su conexión.","Complete":"Completado","Confirmations":"Confirmaciones","Connections to other nodes":"Conexiones a otros nodos","Current Sync Status":"Actual Estado de Sincronización","Details":"Detalles","Error!":"¡Error!","Fee":"Tasa","Final Balance":"Balance Final","Finish Date":"Fecha Final","Go to home":"Volver al Inicio","Height":"Altura","Included in Block":"Incluido en el Bloque","Initial Block Chain Height":"Altura de la Cadena en Bloque Inicial","Input":"Entrada","Latest Blocks":"Últimos Bloques","Loading Address Information":"Cargando Información de la Dirección","Loading Block Information":"Cargando Información del Bloque","Loading Selected Date...":"Cargando Fecha Seleccionada...","Loading Transaction Details":"Cargando Detalles de la Transacción","Loading Transactions...":"Cargando Transacciones...","Loading...":"Cargando...","Next Block":"Próximo Bloque","No blocks yet.":"No hay bloques aún.","No matching records found!":"¡No se encontraron registros coincidentes!","No. Transactions":"Nro. de Transacciones","Number Of Transactions":"Número de Transacciones","Output":"Salida","Previous Block":"Bloque Anterior","Protocol version":"Versión del protocolo","Received Time":"Hora de Recibido","Redirecting...":"Redireccionando...","See all blocks":"Ver todos los bloques","Size":"Tamaño","Size (bytes)":"Tamaño (bytes)","Start Date":"Fecha de Inicio","Status":"Estado","Summary":"Resumen","Sync Progress":"Proceso de Sincronización","Sync Status":"Estado de Sincronización","Sync Type":"Tipo de Sincronización","Synced Blocks":"Bloques Sincornizados","There are no transactions involving this address.":"No hay transacciones para esta dirección","Time Offset":"Desplazamiento de hora","Timestamp":"Fecha y hora","Today":"Hoy","Transaction":"Transacción","Transactions":"Transacciones","Unconfirmed":"Sin confirmar","Unconfirmed Transaction!":"¡Transacción sin confirmar!","Unconfirmed Txs Balance":"Balance sin confirmar","Version":"Versión","Waiting for blocks...":"Esperando bloques...","Waiting for transactions...":"Esperando transacciones..."});
    gettextCatalog.setStrings('ja', {"404 Page not found :(":"404 ページがみつかりません (´・ω・`)","Address":"アドレス","An error occured in the verification process.":"検証過程でエラーが発生しました。","An error occured:<br>{{error}}":"エラーが発生しました:<br>{{error}}","Application Status":"アプリケーションの状態","Bitcoin comes with a way of signing arbitrary messages.":"Bitcoinには任意のメッセージを署名する昨日が備わっています。","Block":"ブロック","BlockHash":"ブロックのハッシュ値","Blocks":"ブロック","Broadcast Raw Transaction":"生のトランザクションを配信","Can't connect to bitcoind to get live updates from the p2p network. (Tried connecting to bitcoind at {{host}}:{{port}} and failed.)":"P2Pネットワークからライブ情報を取得するためにbitcoindへ接続することができませんでした。({{host}}:{{port}} への接続を試みましたが、失敗しました。)","Can't connect to insight server. Attempting to reconnect...":"insight サーバに接続できません。再接続しています...","Can't connect to internet. Please, check your connection.":"インターネットに接続できません。コネクションを確認してください。","Complete":"完了","Confirmations":"検証数","Connections to other nodes":"他ノードへの接続","Current Sync Status":"現在の同期状況","Details":"詳細","Error message:":"エラーメッセージ:","Error!":"エラー！","Fee":"手数料","Final Balance":"最終残高","Finish Date":"終了日時","Go to home":"ホームへ","Hash":"ハッシュ値","Height":"ブロック高","Included in Block":"取り込まれたブロック","Initial Block Chain Height":"起動時のブロック高","Input":"入力","Latest Blocks":"最新のブロック","Latest Transactions":"最新のトランザクション","Loading Address Information":"アドレス情報を読み込んでいます","Loading Block Information":"ブロック情報を読み込んでいます","Loading Selected Date...":"選択されたデータを読み込んでいます...","Loading Transaction Details":"トランザクションの詳細を読み込んでいます","Loading Transactions...":"トランザクションを読み込んでいます...","Loading...":"ロード中...","Message":"メッセージ","Next Block":"次のブロック","No blocks yet.":"ブロックはありません。","No matching records found!":"一致するレコードはありません！","No. Transactions":"トランザクション数","Number Of Transactions":"トランザクション数","Output":"出力","Previous Block":"前のブロック","Protocol version":"プロトコルバージョン","Raw transaction data":"トランザクションの生データ","Raw transaction data must be a valid hexadecimal string.":"生のトランザクションデータは有効な16進数でなければいけません。","Received Time":"受信時刻","Redirecting...":"リダイレクトしています...","See all blocks":"すべてのブロックをみる","Send transaction":"トランザクションを送信","Signature":"署名","Size":"サイズ","Size (bytes)":"サイズ (バイト)","Start Date":"開始日時","Status":"ステータス","Summary":"概要","Sync Progress":"同期の進捗状況","Sync Status":"同期ステータス","Sync Type":"同期タイプ","Synced Blocks":"同期されたブロック数","The message failed to verify.":"メッセージの検証に失敗しました。","The message is verifiably from {{verification.address}}.":"メッセージは{{verification.address}}により検証されました。","There are no transactions involving this address.":"このアドレスに対するトランザクションはありません。","This form can be used to broadcast a raw transaction in hex format over\n        the Bitcoin network.":"このフォームでは、16進数フォーマットの生のトランザクションをBitcoinネットワーク上に配信することができます。","This form can be used to verify that a message comes from\n        a specific Bitcoin address.":"このフォームでは、メッセージが特定のBitcoinアドレスから来たかどうかを検証することができます。","Time Offset":"時間オフセット","Timestamp":"タイムスタンプ","Today":"今日","Transaction":"トランザクション","Transaction succesfully broadcast.<br>Transaction id: {{txid}}":"トランザクションの配信に成功しました。<br>トランザクションID: {{txid}}","Transactions":"トランザクション","Unconfirmed":"未検証","Unconfirmed Transaction!":"未検証のトランザクションです！","Unconfirmed Txs Balance":"未検証トランザクションの残高","Verify":"検証","Verify signed message":"署名済みメッセージを検証","Version":"バージョン","Waiting for blocks...":"ブロックを待っています...","Waiting for transactions...":"トランザクションを待っています..."});
    gettextCatalog.setStrings('zh_CN', {"404 Page not found :(":"页面没有找到：（","Address":"地址","An error occured in the verification process.":"验证过程出错.","An error occured:<br>{{error}}":"错误:<br>{{error}}","Application Status":"节点状态","Balance":"余额","Block":"区块","Block,Transaction,Contract,Address":"区块，交易，智能合约，地址","BlockHash":"区块散列值","Blocks":"区块","Broadcast Raw Transaction":"广播交易","Complete":"完成","Confirmations :":"确认数 :","Connections to other nodes":"连接节点","Current Sync Status":"当前同步状态","Details":"详情","Error message:":"错误消息：","Error!":"错误！","Fee :":"交易费 :","Final Balance":"余额","Finish Date":"完成时间","From Address :":"发送地址","Go to home":"返回首页","Hash":"散列值","Height":"高度","Included in Block :":"所在区块 :","Initial Block Chain Height":"初始区块链高度","Input":"输入","Latest Blocks":"最新区块","Latest Transactions":"最新交易","Loading Address Information":"加载地址信息","Loading Block Information":"加载区块信息","Loading Selected Date...":"加载选择时间...","Loading Transaction Details":"加载交易详情","Loading Transactions...":"加载交易...","Loading...":"加载中...","Message":"消息","Network":"网络","Newstos node information":"牛顿节点信息","Next Block":"下一区块","Latest blocks from date":"最新","No Rank yet.":"没有排名.","No blocks yet.":"没有区块.","No matching records found!":"没有匹配记录!","No. Transactions":"交易数量","Number Of Transactions":"交易数量","Output":"输出","Percentage":"百分比","Previous Block":"上一区块","Previous blocks from date":"更早","Protocol version":"协议版本","Rank":"排行","Raw transaction data":"交易数据","Raw transaction data must be a valid hexadecimal string.":"交易数据必须是有效的十六进制字符串.","Received Time :":"交易时间 :","Redirecting...":"跳转中...","See all blocks":"查看全部区块","Send transaction":"发送交易","Signature":"签名","Size":"大小","Size (bytes)":"大小（字节）","Start Date":"开始时间","Status":"节点状态","Summary":"基本信息","Sync Progress":"同步进度","Sync Status":"同步状态","Sync Type":"同步类型","Synced Blocks":"已同步区块","The message failed to verify.":"消息验证失败.","The message is verifiably from {{verification.address}}.":"消息已验证： {{verification.address}}。","There are no transactions.":"无交易信息.","Time Offset":"时差","Timestamp":"时间","To Address :":"接收地址","Today":"今天","Transaction":"交易","Transaction ID :":"交易编号 :","Transaction succesfully broadcast.<br>Transaction id: {{txid}}":"交易广播成功.<br>交易Id: {{txid}}","Transactions":"交易","Unconfirmed":"未确认","Unconfirmed Transaction!":"未确认的交易!","Unconfirmed Txs Balance":"未确认交易金额","Validator":"验证节点","Value":"金额","Value :":"金额","Verify":"验证","Verify signed message":"验证消息签名","Version":"版本","Waiting for Rank...":"等待排名...","Waiting for blocks...":"等待区块...","Waiting for transactions...":"加载交易...","Transaction Time :":"交易时间","Contracts":"智能合约","TxCount":"交易数量","CreatTime":"创建时间","Contract":"智能合约","Create Transaction":"创始交易","Transactions Count":"交易数量","Creator":"创建者","Create Time":"创建时间","To Contract Address :":"智能合约接收地址","From Contract Address :":"智能合约发送地址"});
/* jshint +W100 */
}]);