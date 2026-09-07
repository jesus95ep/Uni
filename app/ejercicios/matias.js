/* Matias Sebastian GUTIERREZ */
 const facturas = [
        { nro: 1001, cliente: 'TechCorp', monto: 5000, pagada: true },
        { nro: 1002, cliente: 'GlobalSvc', monto: 1200, pagada: false },
        { nro: 1003, cliente: 'InduData', monto: 8500, pagada: true },
        { nro: 1004, cliente: 'SistemasSA', monto: 3100, pagada: false },
        { nro: 1005, cliente: 'PymeLab', monto: 2400, pagada: true }
      ];
// 1.
const MontoTotalFacturado = facturas.filter(f => f.pagada)
      .map(p => p.monto * 1.21)
      .reduce((acum,monto) => acum + monto,0)
 
// 2.
console.log('Total cobrado con IVA: $' + MontoTotalFacturado);
 
// Pendientes de cobro
const MontoTotalFacturadoSinIVA = facturas.filter(f => !f.pagada)
.reduce((acum,factura) => acum + factura.monto , 0);
 
// 3.
console.log('Total de pendientes sin IVA: $' + MontoTotalFacturadoSinIVA);
console.log('Total de pendientes con IVA: $' + MontoTotalFacturadoSinIVA * 1.21);
 
//4. con acum inicializado en 0 todas las salidas son 0
 