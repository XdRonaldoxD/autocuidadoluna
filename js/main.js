const WA_NUM = '51000000000'; // ← Cambia por tu número real

// ── AÑO DINÁMICO ──
const _year = new Date().getFullYear();
document.title = `Luna Auto Cuidado — Catálogo ${_year}`;
document.querySelectorAll('#year-catalogo, #year-footer').forEach(el => el.textContent = _year);

// ── WHATSAPP MENÚ ──
function toggleWaMenu() {
  const menu = document.getElementById('waMenu');
  const tooltip = document.getElementById('waTooltip');
  const btn = document.getElementById('waBtn');
  menu.classList.toggle('open');
  tooltip.style.display = menu.classList.contains('open') ? 'none' : 'block';
  btn.style.background = menu.classList.contains('open')
    ? 'linear-gradient(135deg,#128C7E,#075E54)'
    : 'linear-gradient(135deg,#25D366,#128C7E)';
}

// Ocultar tooltip tras 4s
setTimeout(() => {
  const t = document.getElementById('waTooltip');
  if(t) { t.style.opacity = '0'; t.style.transition = 'opacity .5s'; setTimeout(()=>t.style.display='none',500); }
}, 4000);

// ── DATOS DE PRODUCTOS ──
const productos = [
  {
    nombre: 'GiGi Cherry',
    badge: 'Ambientador',
    usos: ['🚗 Auto / Moto', '🏠 Hogar', '💼 Oficina'],
    desc: 'Ambientador colgante de alta intensidad. Elimina malos olores del interior del auto, habitación o lugar de trabajo. Su fragancia dura hasta 30 días. Solo cuelga del espejo retrovisor o cualquier espacio ventilado y disfruta el aroma.',
    frags: ['Fresa','Cherry','New Car','Vainilla','Chocolate','Uva'],
    precios: [{label:'Unidad', val:'S/ 2.00'},{label:'Docena', val:'S/ 18.00', offer:true}],
    bg: 'linear-gradient(135deg,#ffebee,#fce4ec)',
    cat: 'ambientadores'
  },
  {
    nombre: 'Toricto Bubble Gum',
    badge: 'Ambientador Celulosa',
    usos: ['🚗 Auto / Moto Taxi', '🏍️ Moto', '🏠 Habitación'],
    desc: 'Ambientador de celulosa ecológico y económico. Fabricado en cartón de celulosa impregnado con fragancia natural a chicle. Se cuelga en el espejo retrovisor del coche, moto o mototaxi. Libera el aroma de forma progresiva. Duración aproximada: 25-30 días.',
    frags: ['Chicle'],
    precios: [{label:'Unidad', val:'S/ 1.00'},{label:'Docena', val:'S/ 9.00', offer:true}],
    bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)',
    cat: 'ambientadores'
  },
  {
    nombre: 'Toricto Cherry',
    badge: 'Ambientador Celulosa',
    usos: ['🚗 Auto / Moto Taxi', '🏍️ Moto', '🏠 Habitación'],
    desc: 'Ambientador de celulosa con fragancia dulce a cereza. Ideal para eliminar olores a gasolina, humedad o tabaco en tu vehículo. Muy popular en línea mototaxi por su precio y duración. Se cuelga del retrovisor o espejo del vehículo.',
    frags: ['Cherry'],
    precios: [{label:'Unidad', val:'S/ 1.00'},{label:'Docena', val:'S/ 9.00', offer:true}],
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)',
    cat: 'ambientadores'
  },
  {
    nombre: 'Ambientador Fragancia 1 Litro',
    badge: 'Concentrado',
    usos: ['🏠 Hogar', '🏢 Negocios', '🚿 Baños', '🔄 Recarga'],
    desc: 'Ambientador líquido concentrado para uso en difusores eléctricos, mikados o rociado directo. Rinde para múltiples recargas. Ideal para tiendas, oficinas, baños y habitaciones. Agrega unas gotas al difusor y perfuma todo el ambiente por horas.',
    frags: [],
    precios: [{label:'Litro', val:'S/ 15.00'}],
    bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)',
    cat: 'ambientadores'
  },
  {
    nombre: 'Perfume Déjà Vu Black',
    badge: 'Perfume',
    usos: ['🌸 Uso personal', '🎁 Regalo ideal', '👔 Día a día', '✨ Fragancia unisex'],
    desc: 'Lieu Parfumeur Déjà Vu Black — perfume en spray de 60 ml con una explosión de notas cítricas frescas. Limón, naranja, mandarina y maracuyá se fusionan para crear un aroma vibrante, alegre y duradero. Ideal para el uso diario, regalar o llevar contigo. Su presentación compacta de 60 ml cabe en cualquier bolso o mochila.',
    frags: ['Limón', 'Naranja', 'Mandarina', 'Maracuyá'],
    precios: [{label:'Unidad (60 ml)', val:'S/ 8.00'}],
    bg: 'linear-gradient(135deg,#fff8e1,#ffe0b2)',
    cat: 'ambientadores'
  },
  {
    nombre: 'Speed Racer — Perfumador de Coche',
    badge: 'Ambientador Spray',
    usos: ['🚗 Interior auto', '🏍️ Moto taxi', '💺 Tapizados', '🌬️ Spray directo'],
    desc: 'Spray perfumador de acción rápida para el interior de tu vehículo. Rocía directamente sobre tapizados, alfombras o el ambiente del habitáculo. Elimina instantáneamente olores indeseados y deja una fragancia fresca y duradera. Ideal para taxistas y transportistas.',
    frags: ['Manzana','Pasión','Fresa','Uva','Naranja','New Car'],
    precios: [{label:'Unidad', val:'S/ 5.00'},{label:'3 a más c/u', val:'S/ 10.00', offer:true}],
    bg: 'linear-gradient(135deg,#e3f2fd,#bbdefb)',
    cat: 'ambientadores'
  },
  {
    nombre: 'Frasco de Silicona',
    badge: 'Silicona Líquida',
    usos: ['🚗 Tablero auto', '🏍️ Plásticos moto', '🪟 Vidrios', '🛋️ Muebles'],
    desc: 'Silicona líquida en frasco con atomizador para aplicar directamente sobre superficies plásticas, vinílicas y de caucho. Protege contra rayos UV, hidrata y devuelve el brillo al tablero, puertas y consola. Deja un aroma agradable tras la limpieza. Rinde mucho por su fórmula concentrada.',
    frags: ['Limón','Fresa','Cereza','Uva','New Car','Manzana','Chicle'],
    precios: [{label:'Unidad', val:'S/ 5.00'},{label:'3 a más c/u', val:'S/ 12.50', offer:true}],
    bg: 'linear-gradient(135deg,#fff8e1,#fff3cd)',
    cat: 'siliconas'
  },
  {
    nombre: 'Toricto Brillo Total (Almohadita)',
    badge: 'Silicona Cojín',
    usos: ['🚗 Tablero', '💻 TV / Computadora', '🪵 Madera / Vinil', '🪟 Vidrios'],
    desc: 'Silicona en formato cojín o almohadita. Solo frota sobre la superficie y listo: brillo instantáneo sin líquidos ni trapos adicionales. Funciona en tablero, cuero, caucho, plástico, madera, vidrio, TV, pantallas y vinil. Muy usada en línea mototaxi por su practicidad. 2 onzas de producto.',
    frags: ['Fresa','New Car','Chicle','Brillo Llanta'],
    precios: [{label:'Unidad', val:'S/ 1.00'},{label:'Docena', val:'S/ 10.00', offer:true}],
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)',
    cat: 'siliconas'
  },
  {
    nombre: 'Silicona con Atomizador',
    badge: 'Silicona Spray',
    usos: ['🚗 Auto completo', '🏍️ Moto', '🛞 Llantas', '🪟 Vidrios'],
    desc: 'Silicona en spray con atomizador de fácil aplicación. Rocía directamente sobre la superficie y distribuye uniformemente. Protege y renueva plásticos, llantas, caucho y vinil. Ideal para lavado de autos completo. Deja acabado brillante profesional y repele el polvo.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 6.50'},{label:'3 a más c/u', val:'S/ 13.50', offer:true}],
    bg: 'linear-gradient(135deg,#e8f5e9,#dcedc8)',
    cat: 'siliconas'
  },
  {
    nombre: 'Provecar Silicon Full Fragance',
    badge: 'Silicona Premium',
    usos: ['🚗 Tablero premium', '🛞 Llantas', '🪑 Cuero / Vinil', '✨ Brillo profesional'],
    desc: 'Silicona premium marca Provecar con fragancia intensa y duradera. Fórmula Full Brillo de alta concentración. Protege y acondiciona cuero, vinil, caucho y plástico dejando un acabado brillante y sedoso. Muy usada por talleres y lavaderos profesionales. Repele el polvo y el agua.',
    frags: ['Chicle', 'Varias fragancias'],
    precios: [{label:'Unidad', val:'S/ 10.00'},{label:'Docena', val:'S/ 95.00', offer:true}],
    bg: 'linear-gradient(135deg,#fafafa,#eeeeee)',
    cat: 'siliconas'
  },
  {
    nombre: 'Silicona Líquida — Galonera 5L',
    badge: 'Mayor Rendimiento',
    usos: ['🏢 Lavaderos', '🚗 Flota de vehículos', '🔄 Recarga frascos', '💰 Ahorro x mayor'],
    desc: 'Silicona líquida en galonera de 5 litros para uso profesional. Rinde para recargar múltiples frascos atomizadores. Ideal para lavaderos de autos, flotas de taxis o mototaxis. Protege vinilo, caucho y plásticos del interior y exterior. La mejor opción en costo-rendimiento.',
    frags: [],
    precios: [{label:'Galonera', val:'S/ 28.00'}],
    bg: 'linear-gradient(135deg,#fce4ec,#fce4ec)',
    cat: 'siliconas'
  },
  {
    nombre: 'Silicona Brillo Total — 1 Litro',
    badge: 'Silicona 1L',
    usos: ['🚗 Tablero / Consola', '🚪 Puertas interiores', '🏠 Muebles', '🖥️ Electrodomésticos'],
    desc: 'Silicona líquida Brillo Total en envase de 1 litro. Aplica sobre tablero, puertas, consola y cualquier superficie plástica o vinílica. Devuelve el brillo original, hidrata el material y previene el agrietamiento por el sol. Un litro rinde para varios meses de uso regular.',
    frags: [],
    precios: [{label:'Litro', val:'S/ 12.00'}],
    bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)',
    cat: 'siliconas'
  },
  {
    nombre: 'Provecar Silicona Full Fragancia 120ml',
    badge: '120 ml',
    usos: ['🚗 Tablero auto', '🛞 Caucho / Llantas', '🪑 Cuero / Vinil', '✨ Brillo profesional'],
    desc: 'Silicona Full Fragancia Provecar en presentación de 120 ml con atomizador. Fórmula con protección UV que renueva, protege y da brillo intenso a tablero, plásticos, caucho, cuero y vinil del interior y exterior del auto. Su aroma duradero perfuma el habitáculo con cada aplicación. Tamaño ideal para llevar en la guantera. Rocía directamente y distribuye con un trapo de microfibra para un acabado tipo showroom.',
    frags: ['Chicle', 'Varias fragancias'],
    precios: [{label:'Unidad', val:'S/ 7.00'},{label:'3 unidades', val:'S/ 17.00', offer:true},{label:'Caja de 12', val:'S/ 60.00', offer:true}],
    bg: 'linear-gradient(135deg,#fafafa,#eeeeee)',
    cat: 'siliconas'
  },
  {
    nombre: 'Cera Líquida Automotriz',
    badge: 'Cera',
    usos: ['🚗 Carrocería auto', '🏍️ Moto / Mototaxi', '☀️ Protección UV', '💧 Repelente de agua'],
    desc: 'Cera líquida de alta concentración para proteger y embellecer la pintura de tu auto o moto. Crea una capa protectora que repele el agua, la suciedad y los rayos UV, previniendo el desgaste y opacamiento de la pintura. Devuelve el brillo original con un acabado tipo espejo. Modo de uso: lava y seca bien el vehículo, aplica una capa fina con esponja o microfibra en movimientos circulares, espera 5-10 minutos hasta que seque y retira el residuo con un trapo de microfibra limpio. Se recomienda aplicar cada 2-3 meses para mantener la protección óptima.',
    frags: [],
    precios: [{label:'Frasco', val:'S/ 8.00'}],
    bg: 'linear-gradient(135deg,#fffde7,#fff9c4)',
    cat: 'siliconas'
  },
  {
    nombre: 'Escobilla de Limpieza',
    badge: 'Artículo Limpieza',
    usos: ['🚗 Limpieza auto', '🏠 Hogar', '🛁 Baño', '🍳 Cocina'],
    desc: 'Escobilla de limpieza multiusos con mango ergonómico antideslizante y cerdas resistentes de nylon. Ideal para limpiar el interior del auto, fregar pisos, baños y cocinas. Las cerdas firmes remueven la suciedad incrustada sin rayar las superficies. Duradera y fácil de usar.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 4.00'},{label:'Docena', val:'S/ 28.00', offer:true}],
    bg: 'linear-gradient(135deg,#f3e5f5,#e1bee7)',
    cat: 'limpieza'
  },
  {
    nombre: 'Shampoo para Auto/Moto',
    badge: 'Shampoo Automotriz',
    usos: ['🚗 Carrocería auto', '🏍️ Moto / Mototaxi', '🚐 Camionetas', '✨ Brillo concentrado'],
    desc: 'Shampoo con fórmula de brillo concentrado especial para la carrocería de autos, motos y mototaxis. Limpia profundamente la suciedad, grasa y polvo del camino. No daña la pintura ni el barniz. Deja la carrocería brillante y protegida. Mezcla con agua para mayor rendimiento.',
    frags: ['Manzana Verde','New Car','Fresa'],
    precios: [{label:'Frasco', val:'S/ 4.00'},{label:'Litro', val:'S/ 12.00', offer:true}],
    bg: 'linear-gradient(135deg,#e3f2fd,#bbdefb)',
    cat: 'limpieza'
  },
  {
    nombre: 'Shampoo Automotriz 1 Litro',
    badge: '1 Litro',
    usos: ['🚗 Carrocería auto', '🏍️ Moto / Mototaxi', '🚐 Camionetas', '✨ Brillo concentrado'],
    desc: 'Limpieza profunda con brillo concentrado. Rinde para múltiples lavadas. Para auto y moto.',
    frags: [],
    precios: [{label:'Litro', val:'S/ 15.00'}],
    bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)',
    cat: 'limpieza'
  },
  {
    nombre: 'Trapo de Microfibra 70x40 cm',
    badge: 'Microfibra Grande',
    usos: ['🚗 Secado auto', '🪟 Vidrios', '🪞 Espejos', '🏠 Superficies del hogar'],
    desc: 'Trapo de microfibra de alta densidad 70x40 cm. La microfibra atrapa el polvo, suciedad y líquidos sin dejar pelusa ni rayar. Ideal para secar la carrocería tras el lavado, limpiar vidrios, espejos y superficies delicadas. Muy absorbente, reutilizable y lavable a máquina. Disponible en varios colores.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 5.00'},{label:'Docena', val:'S/ 40.00', offer:true}],
    bg: 'linear-gradient(135deg,#e8f5e9,#dcedc8)',
    cat: 'limpieza'
  },
  {
    nombre: 'Trapo de Microfibra 30x30 cm',
    badge: 'Microfibra Pequeña',
    usos: ['🚗 Tablero / Consola', '👓 Lentes / Pantallas', '🔮 Pulido fino', '🏠 Multiusos'],
    desc: 'Trapo de microfibra compacto 30x30 cm para limpieza de precisión. Perfecto para el tablero, consola, pantallas, lentes de luces y detalles del interior del auto. Atrapa el polvo sin rayar superficies delicadas. Producto peruano de calidad. Lavable y reutilizable múltiples veces.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 2.50'},{label:'Docena', val:'S/ 20.00', offer:true}],
    bg: 'linear-gradient(135deg,#f9fbe7,#f0f4c3)',
    cat: 'limpieza'
  },
  {
    nombre: 'Trapeador de Yute 58x39 cm',
    badge: 'Trapeador Premium',
    usos: ['🏠 Pisos del hogar', '🏢 Negocios', '🚿 Baños', '🍳 Cocinas'],
    desc: 'Trapeador de microfibra premium Ultra-Clean Pro de 58x39 cm con mango ergonómico amarillo. La microfibra de alta densidad absorbe hasta 7 veces su peso en líquidos. Limpia y atrapa bacterias, polvo y residuos en una sola pasada. Reutilizable, lavable a máquina y de larga duración.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 2.50'},{label:'Docena', val:'S/ 20.00', offer:true}],
    bg: 'linear-gradient(135deg,#eceff1,#cfd8dc)',
    cat: 'limpieza'
  },
  {
    nombre: 'Esponjas de Limpieza',
    badge: 'Esponjas',
    usos: ['🍽️ Lavar vajilla', '🚗 Lavado de auto', '🚿 Baño', '🏠 Superficies del hogar'],
    desc: 'Esponjas de limpieza multiusos de celulosa suave. No rayan superficies delicadas como pintura, vidrio, cerámica ni plástico. Alta absorción de agua y jabón para una limpieza eficiente con menos producto. Ideales para lavar vajilla, limpiar el auto, fregar baños y cualquier tarea del hogar. Disponibles en colores amarillo, coral y lila. Resistentes y duraderas.',
    frags: ['Amarilla','Coral','Lila'],
    precios: [{label:'Unidad', val:'S/ 0.50'},{label:'x12 unidades', val:'S/ 5.00', offer:true}],
    bg: 'linear-gradient(135deg,#fff9c4,#f8bbd0)',
    cat: 'limpieza'
  },
  {
    nombre: 'Atomizadores Rociadores de Gatillo',
    badge: 'Accesorio',
    usos: ['🧴 Aplicar siliconas', '🚗 Lavado de auto', '🏠 Limpieza del hogar', '🔄 Rellenable'],
    desc: 'Atomizadores rociadores de gatillo de calidad industrial. Disponibles en color azul y verde. Compatibles con cualquier frasco de boca estándar. Ideales para aplicar silicona líquida, shampoo automotriz, desinfectantes y cualquier producto de limpieza en spray. Gatillo ergonómico de fácil accionamiento, boquilla ajustable entre chorro y neblina. Muy usados por lavaderos de autos y para recargar frascos de limpieza del hogar.',
    frags: ['Azul','Verde'],
    precios: [{label:'Unidad', val:'S/ 1.50'},{label:'Docena', val:'S/ 10.00', offer:true}],
    bg: 'linear-gradient(135deg,#e3f2fd,#e8f5e9)',
    cat: 'limpieza'
  },
  {
    nombre: 'Virutex Pañitos Limpia Todo',
    badge: 'Pañitos',
    usos: ['🍳 Cocina', '🚿 Baño', '🪟 Vidrios / Espejos', '🚗 Interior auto'],
    desc: 'Pañitos Limpia Todo marca Virutex. Paño multiusos de alta absorción fabricado en fibra especial que atrapa la suciedad, grasa y líquidos sin rayar las superficies. Ideal para limpiar mesadas, hornillas, baños, vidrios, espejos e interior del auto. Reutilizable: enjuágalo y sigue usándolo. Muy resistente al desgarro incluso en húmedo. Cada pañito rinde para múltiples limpiezas.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 1.00'},{label:'x20 unidades', val:'S/ 15.00', offer:true}],
    bg: 'linear-gradient(135deg,#fffde7,#fff9c4)',
    cat: 'limpieza'
  },
  {
    nombre: 'Guantes Tatuados',
    badge: 'Guantes',
    usos: ['🧤 Protección de manos', '🚗 Lavado de auto', '🏠 Limpieza del hogar', '🎨 Uso casual / moda'],
    desc: 'Guantes de manga larga con diseños tatuados estampados. Fabricados en tela elástica suave que se adapta a cualquier talla de mano. Protegen las manos y antebrazos durante la limpieza del auto, tareas del hogar o simplemente como accesorio de moda. Disponibles en diseño oceánico (con aves y colores vibrantes) y camuflaje (estampado militar con tigre). Ligeros, lavables y reutilizables.',
    frags: ['Oceánico','Camuflaje'],
    precios: [{label:'Unidad', val:'S/ 4.00'},{label:'Docena', val:'S/ 30.00', offer:true}],
    bg: 'linear-gradient(135deg,#e0f7fa,#e8f5e9)',
    cat: 'limpieza'
  },
  {
    nombre: 'Florinda Jabón Líquido Antibacterial',
    badge: 'Jabón Líquido',
    usos: ['🙌 Lavado de manos', '🏠 Hogar', '🏢 Oficina', '🚿 Baño / Cocina'],
    desc: 'Jabón líquido antibacterial Florinda con dosificador. Elimina gérmenes y bacterias del día a día dejando tus manos limpias, suaves y con un aroma agradable. Fórmula con glicerina que cuida e hidrata la piel con cada lavado. Disponible en 6 fragancias: Fresa, Manzana, Naranja, Lavanda, Floral y Eucalipto. Ideal para el baño, cocina, oficina o cualquier punto de lavado del hogar.',
    frags: ['Fresa','Manzana','Naranja','Lavanda','Floral','Eucalipto'],
    precios: [{label:'Unidad', val:'S/ 4.00'},{label:'3 unidades', val:'S/ 10.00', offer:true}],
    bg: 'linear-gradient(135deg,#e8f5e9,#f3e5f5)',
    cat: 'limpieza'
  },
  {
    nombre: 'Florinda Desinfectante Aromático',
    badge: 'Desinfectante',
    usos: ['🏠 Pisos del hogar', '🚿 Baños', '🍳 Cocina', '🌸 Aromatizador'],
    desc: 'Desinfectante aromático Florinda con fragancia Flores del Paraíso. Limpia y desinfecta pisos, baños y cocinas eliminando el 99.9% de gérmenes, bacterias y hongos (E. Coli, Salmonella, Staphylococcus aureus y más). Deja un aroma floral intenso y duradero en todo el ambiente del hogar. Modo de uso: diluye en agua para trapear o aplica directo sobre la superficie para mayor potencia desinfectante.',
    frags: ['Flores del Paraíso'],
    precios: [{label:'Unidad', val:'S/ 4.00'}],
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)',
    cat: 'limpieza'
  },
  {
    nombre: 'Dkasa Limpiador Aromatizador',
    badge: 'Limpiador',
    usos: ['🏠 Pisos del hogar', '🍳 Cocina', '🚿 Baños', '🧹 Multiusos'],
    desc: 'Limpiatodo aromatizado marca Dkasa. Limpia profundamente pisos, cocinas, baños y toda superficie lavable del hogar dejando una fragancia fresca y duradera de hasta 3-4 horas. Fórmula antibacterial que elimina gérmenes y bacterias al 99.99% (E. Coli, Staphylococcus aureus y más). Producto biodegradable. Modo de uso: aplica directamente sobre la superficie o diluye en agua para trapear pisos.',
    frags: ['Frutales'],
    precios: [{label:'Unidad', val:'S/ 4.00'}],
    bg: 'linear-gradient(135deg,#ede7f6,#d1c4e9)',
    cat: 'limpieza'
  },
  {
    nombre: 'Guantes Household Gloves',
    badge: 'Tallas S y M',
    usos: ['🧴 Limpieza con químicos', '🍽️ Lavar vajilla', '🚗 Lavado de auto', '🧹 Limpieza general'],
    desc: 'Guantes de limpieza doméstica con interior flock (suave como felpa) que protege tus manos. Fabricados en látex resistente a detergentes, siliconas y productos de limpieza. Disponibles en talla S y M. Ideales para lavar el auto, fregar vajilla o cualquier tarea de limpieza que involucre químicos. El paquete incluye 1 par.',
    frags: [],
    precios: [{label:'Unidad', val:'S/ 5.00'},{label:'Docena', val:'S/ 40.00', offer:true}],
    bg: 'linear-gradient(135deg,#e8eaf6,#c5cae9)',
    cat: 'limpieza'
  }
];

// ── CLICK EN TARJETA → MODAL ──
document.querySelectorAll('.prod-card').forEach((card) => {
  card.addEventListener('click', () => {
    const nombre = card.dataset.nombre;
    if (!nombre) return;
    const idx = productos.findIndex(p => p.nombre === nombre);
    if (idx !== -1) openModal(idx, card);
  });
});

function openModal(idx, cardEl) {
  const p = productos[idx];
  if (!p) return;

  document.getElementById('modalBadge').textContent = p.badge;
  document.getElementById('modalNombre').textContent = p.nombre;
  document.getElementById('modalDesc').textContent = p.desc;

  // Imagen (tomamos la del card clickeado)
  const cardImg = cardEl ? cardEl.querySelector('.card-img-wrap') : null;
  const modalImgDiv = document.getElementById('modalImg');
  modalImgDiv.style.background = p.bg;
  const imgEl = cardImg ? cardImg.querySelector('img') : null;
  modalImgDiv.innerHTML = imgEl
    ? `<div class="mz-wrap" id="mzWrap">
        <img id="mzImg" src="${imgEl.src}" alt="${p.nombre}">
        <span class="mz-hint">🔍 Scroll o click para zoom · Arrastra para mover</span>
       </div>`
    : '';
  if (imgEl) initMZoom();

  // Usos
  const fragsDiv = document.getElementById('modalFrags');
  let html_chips = '';
  if (p.usos && p.usos.length) {
    html_chips += '<div class="usos-list">' + p.usos.map(u => `<span class="uso-chip">${u}</span>`).join('') + '</div>';
  }
  if (p.frags.length) {
    html_chips += '<div style="font-size:.7rem;font-weight:800;color:#aaa;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">FRAGANCIAS DISPONIBLES</div>';
    html_chips += '<div class="frag-chips">' + p.frags.map(f => `<span class="frag-chip">${f}</span>`).join('') + '</div>';
  }
  fragsDiv.innerHTML = html_chips;

  // Precios
  const preciosDiv = document.getElementById('modalPrecios');
  preciosDiv.innerHTML = p.precios.map(pr => {
    let fakeHtml = '';
    if (pr.offer) {
      const val = parseFloat(pr.val.replace('S/', '').trim());
      fakeHtml = `<span class="pm-price-fake">S/ ${(val + 1.5).toFixed(2)}</span>`;
    }
    return `<div class="pm-row">
      <span class="pm-label">${pr.label}${pr.offer ? '<span class="pm-promo-tag">🔥 OFERTA</span>' : ''}</span>
      <div style="display:flex;flex-direction:column;align-items:flex-end">
        ${fakeHtml}
        <span class="pm-price ${pr.offer?'offer':''}">${pr.val}</span>
      </div>
    </div>`;
  }).join('');

  // WhatsApp link
  const msg = `Hola! Vi su catálogo y quiero información sobre: *${p.nombre}* 🛒`;
  document.getElementById('modalWaBtn').href = `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

  document.getElementById('prodModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProdModal() {
  document.getElementById('prodModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('prodModal')) closeProdModal();
}

// Cerrar con ESC
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProdModal(); });

// ── ZOOM INLINE CON DRAG ──
function initMZoom() {
  const wrap = document.getElementById('mzWrap');
  const img  = document.getElementById('mzImg');
  if (!wrap || !img) return;

  let scale = 1, tx = 0, ty = 0;
  let dragging = false, moved = false, ox = 0, oy = 0;

  function apply(smooth) {
    img.style.transition = smooth ? 'transform .2s ease' : 'none';
    img.style.transform  = `translate(${tx}px,${ty}px) scale(${scale})`;
    wrap.classList.toggle('mz-panning',  scale > 1 && !dragging);
    wrap.classList.toggle('mz-dragging', dragging);
  }

  function clamp() {
    const mx = Math.max(0, (img.offsetWidth  * (scale - 1)) / 2);
    const my = Math.max(0, (img.offsetHeight * (scale - 1)) / 2);
    tx = Math.max(-mx, Math.min(mx, tx));
    ty = Math.max(-my, Math.min(my, ty));
  }

  // Scroll → zoom
  wrap.addEventListener('wheel', e => {
    e.preventDefault(); e.stopPropagation();
    scale = Math.min(3, Math.max(1, scale + (e.deltaY < 0 ? 0.18 : -0.18)));
    if (scale === 1) { tx = 0; ty = 0; }
    clamp(); apply(true);
  }, { passive: false });

  // Click → toggle zoom
  wrap.addEventListener('click', e => {
    if (moved) return;
    scale = scale > 1 ? 1 : 2;
    if (scale === 1) { tx = 0; ty = 0; }
    clamp(); apply(true);
  });

  // Mouse drag
  wrap.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    dragging = true; moved = false;
    ox = e.clientX - tx; oy = e.clientY - ty;
    apply(false);
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    moved = true;
    tx = e.clientX - ox; ty = e.clientY - oy;
    clamp(); apply(false);
  });
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false; apply(false);
    setTimeout(() => moved = false, 10);
  });

  // Touch — pinch zoom + arrastre
  let lastDist = 0;
  wrap.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      lastDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY);
    } else if (scale > 1) {
      ox = e.touches[0].clientX - tx;
      oy = e.touches[0].clientY - ty;
    }
  }, { passive: true });
  wrap.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY);
      scale = Math.min(3, Math.max(1, scale * (d / lastDist)));
      lastDist = d;
      if (scale === 1) { tx = 0; ty = 0; }
      clamp(); apply(false);
    } else if (scale > 1) {
      tx = e.touches[0].clientX - ox;
      ty = e.touches[0].clientY - oy;
      clamp(); apply(false);
    }
  }, { passive: false });
}

// ── SLIDER ──
let slideActual = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let sliderTimer = setInterval(() => moverSlide(1), 5000);

function irSlide(n) {
  slides[slideActual].classList.remove('active');
  slides[slideActual].classList.add('exit');
  dots[slideActual].classList.remove('active');
  setTimeout(() => slides[slideActual === n ? slideActual : slideActual].classList.remove('exit'), 800);
  slideActual = n;
  slides[slideActual].classList.add('active');
  dots[slideActual].classList.add('active');
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => moverSlide(1), 5000);
}

function moverSlide(dir) {
  let next = (slideActual + dir + slides.length) % slides.length;
  irSlide(next);
}

// ── SCROLL TO TOP ──
window.addEventListener('scroll', () => {
  document.getElementById('btnTop').style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ── NAV SCROLL ──
function irA(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector('.nav-cats').offsetHeight || 55;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navH - 8;
  window.scrollTo({ top: top, behavior: 'smooth' });
  document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ── ANIMACIÓN TARJETAS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.prod-card').forEach(c => observer.observe(c));

// ── PRECIOS FALSOS TACHADOS (efecto promoción) ──
function aplicarPreciosFalsos() {
  document.querySelectorAll('.price-item').forEach(item => {
    const offerEl = item.querySelector('.price-val.offer');
    if (!offerEl) return;
    const val = parseFloat(offerEl.textContent.replace('S/', '').trim());
    if (isNaN(val)) return;
    const fake = `S/ ${(val + 1.5).toFixed(2)}`;
    const wrap = document.createElement('div');
    wrap.className = 'price-val-wrap';
    wrap.innerHTML = `<span class="price-fake">${fake}</span>`;
    offerEl.parentNode.insertBefore(wrap, offerEl);
    wrap.appendChild(offerEl);
    const labelEl = item.querySelector('.price-label');
    if (labelEl) labelEl.innerHTML += ' <span class="promo-tag-card">🔥 OFERTA</span>';
  });
}
aplicarPreciosFalsos();

// ── NAV ACTIVO AL SCROLL ──
window.addEventListener('scroll', () => {
  const secs = ['ambientadores','siliconas','limpieza'];
  const btns = document.querySelectorAll('.btn-cat');
  let found = false;
  for (let i = secs.length - 1; i >= 0; i--) {
    const el = document.getElementById(secs[i]);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 100) {
      btns.forEach(b => b.classList.remove('active'));
      btns[i].classList.add('active');
      found = true;
      break;
    }
  }
  if (!found) {
    btns.forEach(b => b.classList.remove('active'));
    btns[0].classList.add('active');
  }
});