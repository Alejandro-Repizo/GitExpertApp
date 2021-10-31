(this['webpackJsonp04-gif-expert-app'] =
	this['webpackJsonp04-gif-expert-app'] || []).push([
	[0],
	{
		17: function (e, t, a) {},
		19: function (e, t, a) {
			'use strict';
			a.r(t);
			var c = a(1),
				n = a(7),
				r = a.n(n),
				s = a(2),
				i = a(9),
				j = a(0),
				o = function (e) {
					var t = e.setCategories,
						a = Object(c.useState)(''),
						n = Object(s.a)(a, 2),
						r = n[0],
						o = n[1];
					return Object(j.jsxs)('form', {
						className: 'form',
						onSubmit: function (e) {
							e.preventDefault(),
								r.trim().length &&
									((document.title = 'GifExpertApp - '.concat(r)),
									t(function (e) {
										return [r].concat(Object(i.a)(e));
									}),
									o(''));
						},
						children: [
							Object(j.jsx)('input', {
								type: 'text',
								className: 'form__input',
								value: r,
								onChange: function (e) {
									o(e.target.value);
								},
							}),
							Object(j.jsx)('button', {
								className: 'form__button',
								type: 'submit',
								children: Object(j.jsx)('i', { className: 'fas fa-search' }),
							}),
						],
					});
				},
				l = a(10),
				d = function (e) {
					var t = e.title,
						a = e.url;
					return Object(j.jsx)(j.Fragment, {
						children: Object(j.jsxs)('div', {
							className: 'card animate__animated animate__fadeIn',
							children: [
								Object(j.jsx)('img', {
									src: a,
									alt: t,
									className: 'card__image',
								}),
								Object(j.jsx)('p', { className: 'card__title', children: t }),
							],
						}),
					});
				},
				u = a(6),
				m = a.n(u),
				b = a(8),
				f = (function () {
					var e = Object(b.a)(
						m.a.mark(function e(t) {
							var a, c, n, r;
							return m.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												'HocMKjxtyb9J4Xqf91iNzvT7hLLWgPMW',
												(a =
													'https://api.giphy.com/v1/gifs/search?api_key=:key&q='.concat(
														encodeURI(t),
														'&limit=10'
													)),
												(e.next = 4),
												fetch(
													a.replace(':key', 'HocMKjxtyb9J4Xqf91iNzvT7hLLWgPMW')
												)
											);
										case 4:
											return (c = e.sent), (e.next = 7), c.json();
										case 7:
											return (
												(n = e.sent),
												(r = n.data),
												e.abrupt(
													'return',
													r.map(function (e) {
														var t;
														return {
															id: e.id,
															title: e.title,
															url:
																null === (t = e.images) || void 0 === t
																	? void 0
																	: t.downsized_medium.url,
														};
													})
												)
											);
										case 10:
										case 'end':
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				p = function (e) {
					var t = e.category,
						a = (function (e) {
							var t = Object(c.useState)({ data: [], loading: !0 }),
								a = Object(s.a)(t, 2),
								n = a[0],
								r = a[1];
							return (
								Object(c.useEffect)(
									function () {
										f(e).then(function (e) {
											return r({ data: e, loading: !1 });
										});
									},
									[e]
								),
								n
							);
						})(t),
						n = a.data,
						r = a.loading;
					return Object(j.jsx)('div', {
						className: 'container',
						children: Object(j.jsxs)('div', {
							className: 'wrapper wrapper--color',
							children: [
								Object(j.jsxs)('h3', {
									className:
										'container__title animate__animated animate__fadeIn',
									children: [
										Object(j.jsx)('i', {
											className: 'fas fa-star icon icon--categories',
										}),
										t.charAt(0).toUpperCase() + t.slice(1),
									],
								}),
								r &&
									Object(j.jsx)('h1', {
										className: 'loader animate__animated animate__flash',
										children: 'Loading...',
									}),
								Object(j.jsx)('div', {
									className: 'container__card',
									children: n.map(function (e) {
										return Object(j.jsx)(d, Object(l.a)({}, e), e.id);
									}),
								}),
							],
						}),
					});
				},
				h = a.p + '.static/media/search.0c30fd2b.svg',
				O = function () {
					var e = Object(c.useState)([]),
						t = Object(s.a)(e, 2),
						a = t[0],
						n = t[1];
					return Object(j.jsxs)(j.Fragment, {
						children: [
							Object(j.jsx)('header', {
								className: 'header',
								children: Object(j.jsxs)('div', {
									className: 'header__subcontainer wrapper',
									children: [
										Object(j.jsx)('div', {
											className: 'icon',
											children: Object(j.jsx)('i', {
												className: 'fas fa-keyboard',
											}),
										}),
										Object(j.jsx)('h2', { children: 'GifApp' }),
										Object(j.jsx)(o, { setCategories: n }),
									],
								}),
							}),
							a.length <= 0 &&
								Object(j.jsxs)('div', {
									className: 'wrapper search',
									children: [
										Object(j.jsx)('figure', {
											className: 'image',
											children: Object(j.jsx)('img', {
												src: h,
												alt: 'search--gift',
											}),
										}),
										Object(j.jsx)('h1', {
											className: 'search__title',
											children: 'Type your favorite gif',
										}),
									],
								}),
							a.map(function (e) {
								return Object(j.jsx)(p, { category: e }, e);
							}),
						],
					});
				};
			a(17), a(18);
			r.a.render(Object(j.jsx)(O, {}), document.getElementById('root'));
		},
	},
	[[19, 1, 2]],
]);
//# sourceMappingURL=main.f8c9aa93.chunk.js.map
