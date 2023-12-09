/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Список всех станций метро во всех городах */
export type MetroMetroResponse = MetroMetroItem[];

/** Город */
export interface MetroMetroItem {
  /** Идентификатор города */
  id: string;
  /** Список линий метро в городе */
  lines: MetroMetroLineWithStations[];
  /** Название города */
  name: string;
  /** URL запроса */
  url: string;
}

/** Линия метро со станциями */
export type MetroMetroLineWithStations = MetroMetroLine & {
  /** Список станций метро на линии */
  stations: MetroLineStation[];
};

/** Линия метро */
export interface MetroMetroLine {
  /**
   * Цвет линии в HEX-формате `RRGGBB` (от `000000` до `FFFFFF`)
   * @pattern ^[0-9A-Fa-f]{6}$
   */
  hex_color: string;
  /** Идентификатор линии */
  id: string;
  /** Название линии */
  name: string;
}

/** Станция метро */
export interface MetroLineStation {
  /** Идентификатор станции */
  id: string;
  /** Широта расположения станции */
  lat: number;
  /** Линия метро */
  line: MetroMetroLine;
  /** Долгота расположения станции */
  lng: number;
  /** Название станции */
  name: string;
  /** Порядковый номер станции на линии, начиная с 0 */
  order: number;
}

export interface MeChangeName {
  /**
   * Имя
   * @minLength 1
   * @example "Иван"
   */
  first_name: string;
  /**
   * Фамилия
   * @minLength 1
   * @example "Иванов"
   */
  last_name: string;
  /**
   * Отчество, поле может быть пустым
   * @minLength 0
   * @example "Иванович"
   */
  middle_name: string;
}

/**
 * Ошибки в параметрах запроса
 * Информация о возникших ошибках
 */
export type ErrorsBadArgumentEmployerAddressErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadArgumentEmployerAddressError[];
};

/** Ошибка в параметре запроса */
export interface ErrorsBadArgumentEmployerAddressError {
  /**
   * Причина ошибки. Описание:
   * * `too_early` - Отступ по времени от текущей даты слишком большой.
   * * `must_be_a_valid_ISO_8601_date-time_string` - Дата-время указаны в неверном формате.
   * @example "must_be_a_valid_ISO_8601_date"
   */
  reason?: string;
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_argument"
   */
  type: "bad_argument" | "bad_request";
  /**
   * Название поля с ошибкой
   * @example "changed_after"
   */
  value?: string;
}

/** В теле выдается request_id для упрощения решения проблем при обращении в поддержку hh.ru (api@hh.ru). */
export interface ErrorsErrorRequestId {
  /**
   * Идентификатор запроса
   * @example "q1ww2e2r4ty"
   */
  request_id: string;
}

/** Успешный ответ */
export interface EmployersEmployersList {
  /** Найдено результатов */
  found: number;
  /**
   * Найденные работодатели
   * @minItems 0
   */
  items: EmployersEmployerItem[];
  /** Номер страницы */
  page: number;
  /** Всего страниц */
  pages: number;
  /** Результатов на странице */
  per_page: number;
}

/** Работодатель */
export interface EmployersEmployerItem {
  /** Ссылка на описание работодателя на сайте */
  alternate_url: string;
  /** Идентификатор работодателя */
  id: string;
  /** Ссылки на изображения логотипов работодателя разных размеров. `original` — это необработанный логотип, который может быть большого размера. Если изначально загруженный компанией логотип меньше, чем 240px и/или 90px по меньшей стороне, то в соответствующих ключах будут ссылки на изображения оригинального размера. Объект может быть `null`, если компания не загрузила логотип. Клиент должен предусмотреть возможность отсутствия логотипа по указанной ссылке (ответ с кодом `404 Not Found`) */
  logo_urls?: IncludesLogoUrls | IncludesNullableObject | null;
  /** Название работодателя */
  name: string;
  /** Количество открытых вакансий у работодателя */
  open_vacancies: number;
  /** URL для получения полного описания работодателя */
  url: string;
  /** URL для получения поисковой выдачи с вакансиями данного работодателя */
  vacancies_url: string;
}

/**
 * null-объект
 * объект, значение которого null
 */
export enum IncludesNullableObject {
  // @ts-ignore
  Null = null,
}

/** Ссылка на логотип */
export interface IncludesLogoUrls {
  /** URL логотипа с размером менее 90px по меньшей стороне */
  "90": string;
  /** URL логотипа с размером менее 240px по меньшей стороне */
  "240": string;
  /** URL необработанного логотипа */
  original: string;
}

/** Город */
export interface MetroCityMetroItem {
  /** Идентификатор города */
  id: string;
  /** Список линий метро в городе */
  lines: MetroMetroLineWithStations[];
  /** Название города */
  name: string;
}

/** Список языков */
export type DictionariesLangResponse = DictionariesLangItem[];

/** Язык */
export interface DictionariesLangItem {
  /**
   * Идентификатор языка
   * @example "ita"
   */
  id: string;
  /**
   * Название языка
   * @example "Итальянский"
   */
  name: string;
}

/** Департаменты работодателя */
export interface EmployersEmployerDepartmentsResponse {
  /** Список департаментов работодателя */
  items: IncludesIdName[];
}

/** Объект с идентификатором и названием */
export type IncludesIdName = IncludesId & {
  /** Название */
  name: string;
};

/** Объект с идентификатором */
export interface IncludesId {
  /** Идентификатор */
  id: string;
}

/** Успешный ответ */
export interface EmployerDictionariesTestsResponse {
  /**
   * Список тестов
   * @minItems 0
   */
  items: EmployerDictionariesTestItem[];
}

/** Тест */
export interface EmployerDictionariesTestItem {
  /** Идентификатор теста */
  id: string;
  /** Название теста */
  name: string;
}

/**
 * Подсказки по должностям вакансий
 * Подсказки по должностям вакансий
 */
export interface SuggestsVacancyPositions {
  /**
   * Массив найденных должностей вакансий
   * Информация о найденных должностях вакансий
   */
  items: SuggestsVacancyPositionItem[];
}

export interface SuggestsVacancyPositionItem {
  /**
   * Идентификатор должности
   * @example "2063"
   */
  id: string;
  /**
   * Массив профессиональных ролей, соответствующих должности
   * Информация о профессиональных ролях, соответствующих должности
   * @minItems 1
   */
  professional_roles: SuggestsProfessionalRoleItemWithName[];
  /**
   * Название должности
   * @example "Личный водитель"
   */
  text: string;
}

export interface SuggestsProfessionalRoleItemWithName {
  /**
   * Профессиональная роль, для которой можно принимать отклики неполным резюме
   * @example true
   */
  accept_incomplete_resumes: boolean;
  /**
   * Идентификатор профессиональной роли
   * @example "21"
   */
  id: string;
  /**
   * Название профессиональной роли
   * @example "Водитель"
   */
  name: string;
}

/**
 * Плохая авторизация
 * Информация о возникших ошибках
 */
export type ErrorsCaptchaCaptchaErrors = ErrorsErrorRequestId & {
  /**
   * Описание ошибки
   * @example "Forbidden"
   */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsCaptchaCaptchaError[];
};

/** Ошибка */
export interface ErrorsCaptchaCaptchaError {
  /**
   * Адрес веб-страницы, на которой можно пройти капчу. После прохождения капчи аналогичный запрос в апи должен выполниться успешно. Приложение должно добавить в captcha_url обязательный параметр backurl, на который произойдет редирект после прохождения капчи. backurl должен обязательно содержать схему, например, https:// или схему приложения
   * @example "https://hh.ru/account/captcha?state=..."
   */
  captcha_url?: string;
  /**
   * Адрес веб-страницы, на котором можно выполнить аналогичную операцию (страница, чаще всего, сама защищена капчей)
   * @example "https://hh.ru/auth/employer?captcha=true&backurl=..."
   */
  fallback_url?: string;
  /**
   * Текстовый идентификатор типа ошибки
   * @example "captcha_required"
   */
  type: "captcha_required" | "employer_registration_change_email";
  /**
   * `captcha_required` — Необходимо пройти капчу
   * @example "captcha_required"
   */
  value: "captcha_required";
}

/** Дневной лимит просмотра резюме */
export interface EmployerManagersEmployerManagerLimits {
  /** Количество оставшихся просмотров резюме. В этом параметре содержится лимит просмотров на компанию. Из-за этого он может быть меньше, чем доступно текущему пользователю */
  left: EmployerManagersResumeView;
  /** Лимит на просмотр резюме */
  limits: EmployerManagersResumeView;
  /** Количество просмотренных резюме */
  spend: EmployerManagersResumeView;
}

export interface EmployerManagersResumeView {
  /** Просмотры резюме через сайт */
  resume_view: number;
  /** Просмотры резюме из API. Возвращаются, если они предусмотрены в текущей конфигурации доступа к резюме для работодателя */
  resume_view_from_api?: number;
}

/**
 * Сообщение о событии на уровне менеджера
 * @example {"$ref":"#/components/examples/WebhookBaseUser/value"}
 */
export interface WebhookSendObjectBaseUser {
  /** Тип экшена */
  action_type: string;
  /** Идентификатор сообщения */
  id: string;
  payload:
    | WebhookPayloadNewNegotiationVacancy
    | WebhookPayloadNewResponseOrInvitationVacancy
    | WebhookPayloadVacancyArchivation
    | WebhookPayloadVacancyPublicationForVacancyManager
    | WebhookPayloadVacancyProlongation
    | WebhookPayloadVacancyChange
    | WebhookPayloadNegotiationEmployerStateChange;
  /** Идентификатор подписки */
  subscription_id: string;
  /** Идентификатор пользователя */
  user_id: string;
}

/**
 * VACANCY_PROLONGATION
 * Продление вакансии
 */
export interface WebhookPayloadVacancyProlongation {
  /** Дата продления вакансии в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm` */
  prolongation_date: string;
  /** Идентификатор вакансии */
  vacancy_id: string;
}

/**
 * NEW_RESPONSE_OR_INVITATION_VACANCY
 * Новый отклик или приглашение на вакансии (в отличие от NEW_NEGOTIATION_VACANCY, данное событие будет вызываться как на отклик со стороны соискателя, так и на приглашение со стороны работодателя)
 */
export interface WebhookPayloadNewResponseOrInvitationVacancy {
  /** Идентификатор работодателя */
  employer_id: string;
  /** Дата отклика или приглашения в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm` */
  response_date: string;
  /** Идентификатор резюме */
  resume_id: string | null;
  /** Идентификатор топика */
  topic_id: string;
  /** Идентификатор вакансии */
  vacancy_id: string | null;
}

/**
 * VACANCY_ARCHIVATION
 * Архивация вакансии
 */
export interface WebhookPayloadVacancyArchivation {
  /** Дата архивации вакансии в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm` */
  archivation_date: string;
  /** Идентификатор вакансии */
  vacancy_id: string | null;
}

/**
 * NEGOTIATION_EMPLOYER_STATE_CHANGE
 * Изменение этапа, на котором находится кандидат на вакансии. Содержит информацию о том кто, какое резюме с какого на какой
 * статус перевел
 */
export interface WebhookPayloadNegotiationEmployerStateChange {
  /** Идентификатор менеджера, совершившего перевод */
  employer_manager_id: string;
  /** С какого статуса перевели */
  from_state: string;
  /** Идентификатор резюме */
  resume_id: string;
  /** На какой статус перевели */
  to_state: string;
  /** Идентификатор топика */
  topic_id: string;
  /** Время перевода на новый этап */
  transferred_at: string;
  /** Идентификатор вакансии */
  vacancy_id: string;
}

/**
 * NEW_NEGOTIATION_VACANCY
 * Новый отклик на вакансию
 */
export interface WebhookPayloadNewNegotiationVacancy {
  /** Идентификатор работодателя */
  employer_id: string;
  /** Дата отклика в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm` */
  negotiation_date: any;
  /** Идентификатор резюме */
  resume_id: string | null;
  /** Идентификатор топика */
  topic_id: string;
  /** Идентификатор вакансии */
  vacancy_id: string | null;
}

/**
 * VACANCY_CHANGE
 * Изменение вакансии
 */
export interface WebhookPayloadVacancyChange {
  /** Дата изменения вакансии в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm` */
  change_date: string;
  /** Идентификатор вакансии */
  vacancy_id: string;
}

/** VACANCY_PUBLICATION_FOR_VACANCY_MANAGER */
export interface WebhookPayloadVacancyPublicationForVacancyManager {
  /** Дата создания вакансии в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm */
  creation_date: string;
  /** Идентификатор модератора вакансии */
  employer_manager_id: string;
  /** Идентификатор вакансии */
  vacancy_id: string;
}

/** Список факультетов */
export type DictionariesFacultiesResponse = IncludesIdName[];

/**
 * Не найдено.
 * Информация о возникших ошибках.
 */
export type ErrorsNotFoundVacancyBlacklistedErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок.
   * @minItems 1
   */
  errors: ErrorsNotFoundVacancyBlacklistedError[];
};

/** Ошибка. */
export interface ErrorsNotFoundVacancyBlacklistedError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "vacancies_blacklist"
   */
  type: "vacancies_blacklist";
  /**
   * Название поля с ошибкой. Возможные значения:
   * * `not_found` — вакансия для добавления в список не найдена
   * @example "not_found"
   */
  value: "not_found";
}

/** Отобранные вакансии */
export type VacanciesVacanciesFavoritedResponse = IncludesPagination & VacanciesVacanciesFavorited;

export interface IncludesPagination {
  /** Найдено результатов */
  found: number;
  /** Номер страницы */
  page: number;
  /** Всего страниц */
  pages: number;
  /** Результатов на странице */
  per_page: number;
}

export interface VacanciesVacanciesFavorited {
  /** Массив отобранных вакансий */
  items?: VacanciesVacanciesFavoritedItem[];
}

/** Отобранная вакансия */
export interface VacanciesVacanciesFavoritedItem {
  /** Адрес */
  address?: VacancyAddressRawOutput;
  /** URL для регистрации нажатия кнопки отклика */
  adv_response_url: string | null;
  /** Ссылка на представление вакансии на сайте */
  alternate_url: string;
  /** Ссылка на отклик на вакансию на сайте */
  apply_alternate_url: string;
  /** Находится ли данная вакансия в архиве */
  archived: boolean;
  area: IncludesArea;
  /** Дата и время публикации вакансии */
  created_at?: string;
  /** Объект с информацией о департаменте в компании */
  department: VacancyDepartmentOutput | IncludesNullableObject | null;
  employer: VacanciesEmployerPublic;
  /** Информация о наличии прикрепленного тестового задании к вакансии */
  has_test: boolean;
  /** Идентификатор вакансии */
  id: string;
  /** Объект с информацией об интервью о жизни в компании */
  insider_interview?: VacancyInsiderInterview | IncludesNullableObject | null;
  /** Название */
  name: VacancyName;
  /** Ссылка для получения списка откликов/приглашений */
  negotiations_url?: string | null;
  /** Является ли данная вакансия премиум-вакансией */
  premium: boolean;
  /** Дата и время публикации вакансии */
  published_at: string;
  /** Возвращает связи соискателя с вакансией. Значения из поля `vacancy_relation` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries). */
  relations: VacancyRelations;
  /** Обязательно ли заполнять сообщение при отклике на вакансию */
  response_letter_required: VacancyResponseLetterRequired;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: VacancyResponseUrl;
  /** Зарплата */
  salary: VacancySalary;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   *
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: VacancySortPointDistance;
  /** Подходящие резюме на вакансию */
  suitable_resumes_url?: string | null;
  type: VacancyTypeOutput;
  /** URL вакансии */
  url: string;
}

/**
 * Расстояние между центром сортировки и указанным в вакансии адресом
 * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
 *
 * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
 */
export type VacancySortPointDistance = number | null;

/**
 * Название
 * Название
 */
export type VacancyName = string;

/** Департамент */
export type VacancyDepartmentOutput =
  | (VacancyDepartment & {
      /** название департамента работодателя */
      name?: string;
    })
  | null;

/** Департамент */
export type VacancyDepartment = {
  /** департамент [из справочника](https://api.hh.ru/openapi/redoc#tag/Informaciya-o-rabotodatele/operation/get-employer-departments), от имени которого размещается вакансия (если данная возможность доступна для компании) */
  id?: string;
} | null;

/** Регион */
export interface IncludesArea {
  /** Идентификатор региона из [справочника](https://github.com/hhru/api/blob/master/docs/areas.md) */
  id: string;
  /** Название региона */
  name: string;
  /** Ссылка на информацию о регионе */
  url: string;
}

/**
 * Сопроводительное письмо
 * Обязательно ли заполнять сообщение при отклике на вакансию
 */
export type VacancyResponseLetterRequired = boolean;

/** Тип вакансии */
export type VacancyTypeOutput = VacancyType & {
  /** название типа вакансии */
  name?: string;
};

/** Тип вакансии */
export interface VacancyType {
  /** тип из [справочника vacancy_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id: string;
}

/**
 * Зарплата
 * Зарплата
 */
export type VacancySalary = {
  /** Код валюты из [справочника currency](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  currency?: string | null;
  /** Нижняя граница зарплаты */
  from?: number | null;
  /** Признак что границы зарплаты указаны до вычета налогов */
  gross?: boolean | null;
  /** Верхняя граница зарплаты */
  to?: number | null;
};

/**
 * URL
 * URL отклика для прямых вакансий (`type.id=direct`)
 */
export type VacancyResponseUrl = string | null;

/** Информация о компании работодателя */
export interface VacanciesEmployerPublic {
  /**
   * ссылка на представление компании на сайте
   * @example "https://hh.ru/employer/1455"
   */
  alternate_url?: string | null;
  /**
   * Идентификатор компании
   * @example "1455"
   */
  id?: string | null;
  /** cсылки на логотипы работодателя разных размеров */
  logo_urls?: IncludesLogoUrls | IncludesNullableObject | null;
  /**
   * Название компании
   * @example "HeadHunter"
   */
  name: string;
  /** флаг, показывающий, прошла ли компания проверку на сайте */
  trusted: boolean;
  /**
   * URL, на который нужно сделать GET-запрос, чтобы получить информацию о компании
   * @example "https://api.hh.ru/employers/1455"
   */
  url?: string | null;
  /**
   * ссылка на поисковую выдачу вакансий данной компании
   * @example "https://api.hh.ru/vacancies?employer_id=1455"
   */
  vacancies_url?: string | null;
}

/**
 * Адрес
 * Адрес
 */
export type VacancyAddressRawOutput = {
  /** Дом */
  building?: string | null;
  /** Город */
  city?: string | null;
  /** Описание */
  description?: string | null;
  /** Адрес из [списка доступных адресов работодателя](https://api.hh.ru/openapi/redoc#tag/Adresa-rabotodatelya/operation/get-employer-addresses) */
  id?: string | null;
  /** Широта */
  lat?: number | null;
  /** Долгота */
  lng?: number | null;
  metro?: IncludesMetroStation;
  /** @minItems 0 */
  metro_stations?: IncludesMetroStation[];
  /** Полный адрес */
  raw?: string | null;
  /** Улица */
  street?: string | null;
};

/** Станция метро */
export interface IncludesMetroStation {
  /** широта */
  lat: number | null;
  /** идентификатор линии метро */
  line_id: string;
  /** названии линии метро */
  line_name: string;
  /** долгота */
  lng: number | null;
  /** идентификатор станции метро */
  station_id: string;
  /** название станции метро */
  station_name: string;
}

/**
 * Связи соискателя с вакансией
 * Возвращает связи соискателя с вакансией. Значения из поля `vacancy_relation` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries).
 */
export type VacancyRelations = VacancyRelationItem[];

/** Текстовый идентификатор связи */
export enum VacancyRelationItem {
  Favorited = "favorited",
  GotResponse = "got_response",
  GotInvitation = "got_invitation",
  GotRejection = "got_rejection",
  Blacklisted = "blacklisted",
  // @ts-ignore
  Null = null,
}

/** Объект с информацией об интервью о жизни в компании */
export interface VacancyInsiderInterview {
  /** Идентификатор интервью */
  id: string;
  /** Адрес страницы, содержащей интервью */
  url: string;
}

/**
 * Ошибки в параметрах запроса
 * Информация о возникших ошибках
 */
export type ErrorsBadArgumentErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadArgumentError[];
};

/** Ошибка в параметре запроса */
export interface ErrorsBadArgumentError {
  /**
   * Описание ошибки
   * @example "too_long_value"
   */
  reason?: string;
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_argument"
   */
  type: "bad_argument";
  /**
   * Название поля с ошибкой.
   * @example "resume_id"
   */
  value?: string;
}

/**
 * Подсказки по специализациям
 * Подсказки по специализациям
 */
export interface SuggestsFieldsOfStudy {
  /**
   * Массив специализаций
   * Информация о найденных специализациях
   */
  items: SuggestsFieldsOfStudyItem[];
}

export interface SuggestsFieldsOfStudyItem {
  /** Идентификатор специализации */
  id: string;
  /** Название специализации */
  text: string;
}

/** JSON c редактируемыми параметрами менеджера */
export interface EmployerManagersManagerData {
  /** Дополнительный телефон менеджера */
  additional_phone?: EmployerManagersPhone & object;
  /** Список прав, которые можно дать данному типу менеджера */
  permissions?: EmployerManagerTypesAvailablePermissions[];
  /** Основной телефон менеджера */
  phone?: EmployerManagersPhone & object;
  /** Должность менеджера */
  position?: string;
}

/** Типы прав доступа */
export interface EmployerManagerTypesAvailablePermissions {
  /** Идентификатор права */
  id: string;
  /** Название права */
  name: string;
}

export interface EmployerManagersPhone {
  /** Код города */
  city: string;
  /** Комментарий */
  comment?: string;
  /** Код страны */
  country: string;
  /** Номер телефона отформатированный */
  formatted?: string;
  /** Номер */
  number: string;
}

/** Сохраненный поиск вакансий/резюме */
export interface SavedSearchesSavedSearchItem {
  /** Дата и время создания */
  created_at: string;
  /** Идентификатор поиска */
  id: string;
  /** Данные о списке найденных вакансий/резюме */
  items: IncludesCountUrl & object;
  /** Название поиска */
  name: string;
  /**
   * Данные о найденных вакансиях/резюме, появившихся с момента последнего просмотра автопоиска. При переходе по ссылке счетчик новых элементов будет сброшен (возможна небольшая задержка по времени).
   *
   * Счетчик `new_items.count` обновляется раз в час. Из-за этого реальное количество новых найденных элементов может расходиться со значением этого счетчика
   */
  new_items: IncludesCountUrl & object;
  /** Статус подписки */
  subscription: boolean;
}

export interface IncludesCountUrl {
  /** Количество элементов */
  count: number;
  /** Ссылка на получение элементов */
  url: string;
}

/** Успешный ответ */
export type VacanciesDeletedVacancyListResponse = IncludesPagination & VacanciesDeletedVacancyListItems;

export interface VacanciesDeletedVacancyListItems {
  /**
   * Список удаленных вакансий
   * @minItems 0
   */
  items: VacanciesVacancyArchived[];
}

/** Представление вакансии в архиве */
export type VacanciesVacancyArchived = VacanciesVacancyShort & VacanciesVacancyArchivedFields;

/** Сокращенное представление вакансии */
export interface VacanciesVacancyShort {
  /** Адрес */
  address?: VacancyAddressRawOutput;
  /** Ссылка на представление вакансии на сайте */
  alternate_url: string;
  /** Ссылка на отклик на вакансию на сайте */
  apply_alternate_url: string;
  /** Находится ли данная вакансия в архиве */
  archived: boolean;
  area: IncludesArea;
  department: VacancyDepartmentOutput | IncludesNullableObject | null;
  employer: VacanciesEmployerPublic | IncludesNullableObject;
  /** Информация о наличии прикрепленного тестового задании к вакансии */
  has_test: boolean;
  /** Идентификатор вакансии */
  id: string;
  /** Название вакансии */
  name: string;
  /** Является ли данная вакансия премиум-вакансией */
  premium: boolean;
  /** Дата и время публикации вакансии */
  published_at: string;
  /** Возвращает связи соискателя с вакансией. Значения из поля `vacancy_relation` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  relations: VacancyRelationItem[];
  /** Обязательно ли заполнять сообщение при отклике на вакансию */
  response_letter_required: boolean;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: string | null;
  /** Зарплата */
  salary: VacancySalary;
  type: VacancyTypeOutput;
  /** URL вакансии */
  url: string;
}

/** Поля для архивной вакансии */
export interface VacanciesVacancyArchivedFields {
  /** Дата и время архивации вакансии */
  archived_at: string;
  counters: VacancyCountersForArchivedOrHidden;
  /** Дата и время публикации вакансии */
  created_at: string;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   *
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: number | null;
}

/** Счетчики для вакансии */
export type VacancyCountersForArchivedOrHidden = VacancyCounters & {
  /** Количество откликов и приглашений на вакансию */
  invitations_and_responses?: number;
};

/** Счетчики */
export interface VacancyCounters {
  /** Количество откликов на вакансию */
  responses?: number;
}

/** Объект подписки */
export type WebhookSubscriptionCreate = WebhookSubscriptionCommonItem & object;

/** Объект подписки */
export interface WebhookSubscriptionCommonItem {
  /**
   * Cписок событий
   * @minItems 1
   */
  actions: (
    | WebhookActionNewNegotiationVacancy
    | WebhookActionNewResponseOrInvitationVacancy
    | WebhookActionVacancyArchivation
    | WebhookActionVacancyChange
    | WebhookActionVacancyProlongation
    | WebhookActionVacancyPublicationForVacancyManager
    | WebhookActionNegotiationEmployerStateChange
    | (WebhookActionNewNegotiationVacancy &
        WebhookActionNewResponseOrInvitationVacancy &
        WebhookActionVacancyArchivation &
        WebhookActionVacancyChange &
        WebhookActionVacancyProlongation &
        WebhookActionVacancyPublicationForVacancyManager &
        WebhookActionNegotiationEmployerStateChange)
  )[];
  /**
   * URL, на который будет отправляться POST запрос при наступлении события.
   * @format uri
   * @example "http://www.example.com"
   */
  url: string;
}

/** Подписка на VACANCY_CHANGE */
export interface WebhookActionVacancyChange {
  settings?:
    | WebhookActionVacancyOnlyMineSettings
    | IncludesNullableObject
    | (WebhookActionVacancyOnlyMineSettings & IncludesNullableObject)
    | null;
  /** Изменение вакансии. Аккумулирует изменения за несколько последних секунд и присылает вебхук с временем последнего изменения. Если сделать 2 изменения с разницей в 1 секунду, отправится только 1 сообщение с временем последнего изменения. Если изменение одно, вебхук отправляется не моментально, а с задержкой в несколько секунд. */
  type: "VACANCY_CHANGE";
}

/** Настройка на подписку только на мои вакансии */
export interface WebhookActionVacancyOnlyMineSettings {
  /**
   * Присылать уведомления только про мои вакансии. По умолчанию false - присылать уведомления про все вакансии, к которым есть доступ.
   * @default false
   */
  vacancies_only_mine?: boolean;
}

/** Подписка на NEGOTIATION_EMPLOYER_STATE_CHANGE */
export interface WebhookActionNegotiationEmployerStateChange {
  settings?:
    | WebhookActionVacancyOnlyMineSettings
    | IncludesNullableObject
    | (WebhookActionVacancyOnlyMineSettings & IncludesNullableObject)
    | null;
  /** Перемещение кандидата на другой этап вакансии. Содержит информацию о том кто, какое резюме с какого на какой статус перевел. */
  type: "NEGOTIATION_EMPLOYER_STATE_CHANGE";
}

/** Подписка на VACANCY_PROLONGATION */
export interface WebhookActionVacancyProlongation {
  settings?:
    | WebhookActionVacancyOnlyMineSettings
    | IncludesNullableObject
    | (WebhookActionVacancyOnlyMineSettings & IncludesNullableObject)
    | null;
  /** Продление вакансии */
  type: "VACANCY_PROLONGATION";
}

/** Подписка на NEW_RESPONSE_OR_INVITATION_VACANCY */
export interface WebhookActionNewResponseOrInvitationVacancy {
  settings?:
    | WebhookActionVacancyOnlyMineSettings
    | IncludesNullableObject
    | (WebhookActionVacancyOnlyMineSettings & IncludesNullableObject)
    | null;
  /** Новый отклик или приглашение на вакансию. Данное событие будет вызываться как на отклик со стороны соискателя, так и на приглашение со стороны работодателя */
  type: "NEW_RESPONSE_OR_INVITATION_VACANCY";
}

/** Подписка на VACANCY_ARCHIVATION */
export interface WebhookActionVacancyArchivation {
  settings?:
    | WebhookActionVacancyOnlyMineSettings
    | IncludesNullableObject
    | (WebhookActionVacancyOnlyMineSettings & IncludesNullableObject)
    | null;
  /** Архивация вакансии */
  type: "VACANCY_ARCHIVATION";
}

/** Подписка на NEW_NEGOTIATION_VACANCY */
export interface WebhookActionNewNegotiationVacancy {
  settings?:
    | WebhookActionVacancyOnlyMineSettings
    | IncludesNullableObject
    | (WebhookActionVacancyOnlyMineSettings & IncludesNullableObject)
    | null;
  /** Новый отклик на вакансию. Данное событие будет вызываться только на отклик со стороны соискателя. */
  type: "NEW_NEGOTIATION_VACANCY";
}

/** Подписка на VACANCY_PUBLICATION_FOR_VACANCY_MANAGER */
export interface WebhookActionVacancyPublicationForVacancyManager {
  /** Публикация вакансии. Событие присылается только для менеджера-владельца вакансии при создании вакансии, отложенной публикации или публикации из черновика */
  type: "VACANCY_PUBLICATION_FOR_VACANCY_MANAGER";
}

/**
 * Успешный ответ
 * @example {"$ref":"#/components/examples/EmployerAddressItem/value"}
 */
export type EmployerAddressesEmployerAddressResponse = EmployerAddressesEmployerAddressItems & IncludesPagination;

/** JSON c параметрами адреса */
export interface EmployerAddressesEmployerAddressItems {
  /** Список адресов работодателя */
  items: EmployerAddressesEmployerAddressItem[];
}

/** Адрес */
export interface EmployerAddressesEmployerAddressItem {
  /** Номер дома */
  building?: string | null;
  /** Город */
  city: string | null;
  /** Удалён ли адрес */
  deleted?: boolean;
  /** Дополнительная информация об адресе */
  description?: string | null;
  /** Идентификатор адреса */
  id?: string;
  /** Географическая широта */
  lat: number | null;
  /** Географическая долгота */
  lng: number | null;
  metro_stations?: IncludesMetroStation[];
  /** Полный адрес */
  raw?: string | null;
  /** Улица */
  street?: string | null;
}

/** Ошибка */
export type SuggestsErrors = ErrorsErrorRequestId & {
  /** @deprecated */
  bad_argument?: "locale" | "text" | "area_id";
  /** @deprecated */
  bad_arguments?: {
    description?: string;
    /**
     * Поле, в котором допущена ошибка.
     * Возможные значения:
     * * `locale` — указан неподдерживаемый язык
     * * `text` — искомый текст должен быть длиной от 2 до 30000 символов
     * * `area_id` - указан не валидный идентификатор
     */
    name?: "locale" | "text" | "area_id";
  }[];
  /** @deprecated */
  description?: string;
  errors: {
    type?: "bad_argument";
    /**
     * Поле, в котором допущена ошибка.
     * Возможные значения:
     * * `locale` — указан неподдерживаемый язык
     * * `text` — искомый текст должен быть длиной от 2 до 30000 символов
     * * `area_id` - указан не валидный идентификатор
     */
    value?: "locale" | "text" | "area_id";
  }[];
};

/**
 * Каталог профессиональных ролей
 * Каталог профессиональных ролей и категорий
 */
export interface ProfessionalRolesCatalog {
  /**
   * Категория профессиональной роли
   * Информация о категории профессиональной роли
   * @minItems 1
   */
  categories: ProfessionalRolesCategory[];
}

export interface ProfessionalRolesCategory {
  /**
   * Идентификатор категории профессиональной роли
   * @minLength 1
   * @example "123"
   */
  id: string;
  /**
   * Имя категории профессиональной роли
   * @minLength 1
   * @example "Строительство, недвижимость"
   */
  name: string;
  /**
   * Список профессиональных ролей, входящих в эту категорию
   * @minItems 1
   */
  roles: ProfessionalRolesRole[];
}

/** Профессиональная роль */
export interface ProfessionalRolesRole {
  /**
   * На роль принимаются отклики неполным резюме
   * @example true
   */
  accept_incomplete_resumes: boolean;
  /**
   * Идентификатор профессиональной роли
   * @minLength 1
   * @example "1"
   */
  id: string;
  /**
   * Дефолтная роль
   * @example true
   */
  is_default: boolean;
  /**
   * Имя профессиональной роли
   * @minLength 1
   * @example "Архитектор"
   */
  name: string;
}

/** Успешный ответ */
export interface VacancyDraftVacancyDraftItems {
  /** Количество найденных черновиков */
  found: number;
  /** Список черновиков */
  items: VacancyDraftVacancyDraftItem[];
  /** Номер текущей страницы */
  page: number;
  /** Количество страниц с черновиками */
  pages: number;
  /** Количество элементов на страницу */
  per_page: number;
}

/** Черновик */
export type VacancyDraftVacancyDraftItem = VacancyDraftVacancyDraftBase & {
  /**
   * Коды и названия регионов (фед. округа, субъекты федерации, города)
   * @minItems 1
   */
  areas: VacancyAreaOutput[];
  /** Биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  billing_type: VacancyBillingTypeOutput;
  /** Название вакансии */
  name?: string;
  /**
   * Тип публикации (справочник [vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries))
   * @deprecated
   */
  publication_type: string;
  /** Url для запроса полной информации черновика */
  url: string;
  /** Тип вакансии (справочник [vacancy_type](#tag/Obshie-spravochniki/operation/get-dictionaries)) */
  vacancy_type: string | null;
};

/** Черновик */
export interface VacancyDraftVacancyDraftBase {
  /** Состояние автопубликации. Объект при активной автопубликации, иначе null */
  auto_publication?: VacancyDraftAutoPublicationState | IncludesNullableObject | null;
  /** Процент заполнения черновика */
  completed_fields_percentage: number;
  /**
   * Идентификатор черновика
   * @minLength 1
   */
  draft_id: string;
  /** Массив объектов с информацией о том, каких публикаций не хватает на счету для публикации вакансии из данного черновика */
  insufficient_publications?: VacancyDraftPublications[] | null;
  /** Массив объектов с информацией о том, какие квоты превышены */
  insufficient_quotas?: VacancyDraftPublications[] | null;
  /** Время изменения черновика (в формате [ISO 8601](https://ru.wikipedia.org/wiki/ISO_8601) с точностью до секунды `YYYY-MM-DDThh:mm:ss±hhmm`) */
  last_change_time?: string | null;
  /** Готовность черновика к публикации */
  publication_ready: boolean;
  /** Массив объектов с информацией о необходимых публикациях на счету */
  required_publications?: VacancyDraftPublications[] | null;
  /**
   * Время запланированной публикации вакансии (в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm`
   * @pattern ^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?((\+|-)[0-1][0-9]{3})?$
   */
  scheduled_at: string | null;
}

/** Публикация */
export interface VacancyDraftPublications {
  /** Биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  billing_type: VacancyBillingTypeOutput;
  /** Количество публикаций */
  count: number;
  /**
   * Тип публикации (справочник [vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries))
   * @deprecated
   */
  publication_type: string;
  /** Тип вакансии (справочник [vacancy_type](#tag/Obshie-spravochniki/operation/get-dictionaries)) */
  vacancy_type: string;
}

/**
 * Биллинговый тип вакансии
 * Биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries)
 */
export type VacancyBillingTypeOutput =
  | (VacancyBillingType & {
      /** название биллингового типа вакансии */
      name?: string;
    })
  | null;

export interface VacancyBillingType {
  /** биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id: string;
}

/** Состояние публикации */
export interface VacancyDraftAutoPublicationState {
  /** Номер счета */
  bill_uid: string;
  /** Идентификатор заказа */
  cart_id: string;
}

/** Регион */
export interface VacancyAreaOutput {
  /** Идентификатор региона */
  id: string;
  /** Название региона */
  name: string;
}

/** Поля, передаваемые в запросе на создание вакансии */
export interface VacancyCreate {
  accept_handicapped?: VacancyAcceptHandicapped | IncludesNullableObject | null;
  accept_incomplete_resumes?: VacancyAcceptIncompleteResumes | IncludesNullableObject | null;
  accept_kids?: VacancyAcceptKids | IncludesNullableObject | null;
  /** указание, что вакансия доступна с временным трудоустройством */
  accept_temporary?: VacancyAcceptTemporary;
  /** адрес */
  address?: VacancyAddress;
  allow_messages?: VacancyAllowMessages | IncludesNullableObject | null;
  area: VacancyArea;
  billing_type: VacancyBillingType;
  /** Предпочитаемый брендированный шаблон вакансий работодателя либо `null`, если не используется у компании. */
  branded_template?: VacancyBrandedTemplate;
  /** внутренний код вакансии */
  code?: VacancyCode;
  /** Контактная информация */
  contacts?: VacancyContacts;
  /** название компании для анонимных вакансий (`type.id=anonymous`), например "крупный российский банк". Если не передать, проставится автоматом пустая строка. */
  custom_employer_name?: VacancyCustomEmployerName;
  department?: VacancyDepartment;
  /** описание в html, не менее 200 символов */
  description: VacancyDescription;
  driver_license_types?: VacancyDriverLicenseTypes | IncludesNullableObject | null;
  employment?: VacancyEmployment;
  experience?: VacancyExperience | IncludesNullableObject | (VacancyExperience & IncludesNullableObject) | null;
  key_skills?: VacancyKeySkills | IncludesNullableObject | null;
  languages?: VacancyLanguages | IncludesNullableObject | null;
  manager?: VacancyManager | IncludesNullableObject | null;
  /** Название */
  name: VacancyName;
  professional_roles?: VacancyProfessionalRoles | IncludesNullableObject | null;
  response_letter_required?: VacancyResponseLetterRequired | IncludesNullableObject | null;
  response_notifications?: VacancyResponseNotifications | IncludesNullableObject | null;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: VacancyResponseUrl;
  /** Зарплата */
  salary?: VacancySalary;
  schedule?: VacancySchedule;
  /** список специализаций */
  specializations?: VacancySpecializations;
  /** объект - [тест](#tag/Spravochniki-rabotodatelya/operation/get-tests-dictionary) для вакансии */
  test?: VacancyDraftTest;
  /** Тип вакансии */
  type: VacancyType;
  /** список рабочих дней */
  working_days?: VacancyWorkingDays;
  /** список с временными интервалами работы */
  working_time_intervals?: VacancyWorkingTimeIntervals;
  /** список режимов времени работы */
  working_time_modes?: VacancyWorkingTimeModes;
}

/**
 * Брендированный шаблон
 * Предпочитаемый брендированный шаблон вакансий работодателя либо `null`, если не используется у компании.
 */
export type VacancyBrandedTemplate = {
  /**
   * Идентификатор брендированного шаблона вакансий
   * @minLength 1
   * @example "default"
   */
  id?: string | null;
  /**
   * Название брендированного шаблона вакансий
   * @example "Стандартный шаблон"
   */
  name?: string | null;
};

/**
 * Категория водительских прав
 * список требуемых категорий водительских прав
 */
export type VacancyDriverLicenseTypes = VacancyDriverLicenceTypeItem[];

/** Категория водительских прав */
export interface VacancyDriverLicenceTypeItem {
  /** категория водительских прав. элемент справочника [driver_license_types](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string;
}

/**
 * Тест
 * объект - [тест](#tag/Spravochniki-rabotodatelya/operation/get-tests-dictionary) для вакансии
 */
export type VacancyDraftTest = {
  /**
   * тест, который будет добавлен в вакансию
   * @pattern ^\d+$
   */
  id?: string | null;
  /** флаг обязательности прохождения теста при отклике на вакансию */
  required?: boolean | null;
};

/**
 * Временное трудоустройство
 * указание, что вакансия доступна с временным трудоустройством
 */
export type VacancyAcceptTemporary = boolean | null;

/**
 * Соискатель старше 14 лет
 * Указание, что вакансия доступна для соискателей старше 14 лет [подробнее](https://github.com/hhru/api/blob/master/docs/employer_vacancies_accept_kids.md#accept-kids)
 */
export type VacancyAcceptKids = boolean;

/**
 * Новые отклики
 * Уведомлять ли менеджера о новых откликах
 */
export type VacancyResponseNotifications = boolean;

/**
 * Режимы работы
 * список режимов времени работы
 */
export type VacancyWorkingTimeModes = VacancyWorkingTimeModeItem[] | null;

export interface VacancyWorkingTimeModeItem {
  /** режимы времени работы из [справочника working_time_modes](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string;
}

/**
 * Список рабочих дней
 * список рабочих дней
 */
export type VacancyWorkingDays = VacancyWorkingDayItem[] | null;

/** Рабочий день */
export interface VacancyWorkingDayItem {
  /** рабочие дни из [справочника working_days](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string;
}

/**
 * Ключевые навыки
 * Список ключевых навыков, не более 30
 */
export type VacancyKeySkills = VacancyKeySkillItem[];

/** Объект ключевых навыков */
export interface VacancyKeySkillItem {
  /** название ключевого навыка */
  name?: string;
}

/** График работы */
export type VacancySchedule = {
  /** график работы из [справочника schedule](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string | null;
};

/**
 * Разрешение сообщений
 * возможность [переписки с кандидатами](https://inboxemp.hh.ru/) по данной вакансии
 */
export type VacancyAllowMessages = boolean;

export type VacancyEmployment = {
  /** тип занятости из [справочника employment](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string | null;
};

/** Область */
export interface VacancyArea {
  /**
   * город публикации из [справочника](https://github.com/hhru/api/blob/master/docs/areas.md)
   * @pattern ^\d+$
   * @example "1625"
   */
  id: string;
}

/** адрес */
export type VacancyAddress = {
  /** адрес из [списка доступных адресов работодателя](#tag/Adresa-rabotodatelya/operation/get-employer-addresses) */
  id?: string | null;
  /** показывать только метро для указанного адреса */
  show_metro_only?: boolean | null;
};

/**
 * Соискатель с инвалидностью
 * Указание, что вакансия доступна для соискателей с инвалидностью
 */
export type VacancyAcceptHandicapped = boolean;

/**
 * Описание
 * описание в html, не менее 200 символов
 */
export type VacancyDescription = string;

/**
 * Код вакансии
 * внутренний код вакансии
 */
export type VacancyCode = string | null;

/** Опыт работы */
export type VacancyExperience = {
  /** требуемый опыт работы из [справочника experience](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string;
} | null;

/**
 * Языки вакансии
 * список языков вакансии
 */
export type VacancyLanguages = VacancyLanguage[];

/** Объект языка */
export type VacancyLanguage = {
  /** идентификатор языка */
  id: string;
  level: {
    /** идентификатор уровня владения языком */
    id: string;
  };
} | null;

/** Контактная информация */
export type VacancyContacts = {
  /** Электронная почта. Значение поля должно соответствовать формату email. */
  email?: string | null;
  /** Имя контакта */
  name: string;
  /** Список телефонов для связи */
  phones?: VacancyPhoneItem[] | null;
};

/** Объект телефона для связи */
export interface VacancyPhoneItem {
  /** код города */
  city?: string;
  /** комментарий (удобное время для звонка по этому номеру) */
  comment?: string | null;
  /** код страны */
  country?: string;
  /** телефонный номер */
  formatted?: string;
  /** телефон */
  number?: string;
}

/** список профессиональных ролей */
export type VacancyProfessionalRoles = VacancyProfessionalRoleItem[];

/** Объект профессиональной роли */
export interface VacancyProfessionalRoleItem {
  /** Идентификатор профессиональной роли */
  id?: string;
}

/**
 * Неполное резюме
 * разрешен ли отклик на вакансию неполным резюме
 */
export type VacancyAcceptIncompleteResumes = boolean;

/** Менеджер */
export interface VacancyManager {
  /** контактное лицо (менеджер) по размещаемой вакансии, по умолчанию текущий пользователь */
  id?: string | null;
}

/**
 * Интервалы работы
 * список с временными интервалами работы
 */
export type VacancyWorkingTimeIntervals = VacancyWorkingTimeIntervalItem[] | null;

export interface VacancyWorkingTimeIntervalItem {
  /** временной интервал работы из [справочника working_time_intervals](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string;
}

/**
 * Название
 * название компании для анонимных вакансий (`type.id=anonymous`), например "крупный российский банк". Если не передать, проставится автоматом пустая строка.
 */
export type VacancyCustomEmployerName = string | null;

/** список специализаций */
export type VacancySpecializations = VacancySpecializationItem[];

/** Объект специализаций */
export interface VacancySpecializationItem {
  /** специализация из [справочника](https://github.com/hhru/api/blob/master/docs/specializations.md) */
  id?: string;
}

/**
 * Подсказки по должностям резюме
 * Подсказки по должностям
 */
export interface SuggestsPositions {
  /**
   * Массив найденных должностей
   * Информация о найденных должностях
   */
  items: SuggestsPositionItem[];
}

export interface SuggestsPositionItem {
  /**
   * Идентификатор должности
   * @example "2063"
   */
  id: string;
  /**
   * Массив профессиональных ролей, соответствующих должности
   * Информация о профессиональных ролях, соответствующих должности
   * @minItems 1
   */
  professional_roles: SuggestsProfessionalRoleItemWithName[];
  /**
   * Массив специализаций, соответствующих должности
   * Информация о специализациях, соответствующих должности
   * @minItems 1
   */
  specializations?: SuggestsSpecializationsWithName[];
  /**
   * Название должности
   * @example "Личный водитель"
   */
  text: string;
}

export interface SuggestsSpecializationsWithName {
  /**
   * Идентификатор специализации
   * @example "21.17"
   */
  id: string;
  /**
   * Название специализации
   * @example "Автоперевозки"
   */
  name: string;
  /**
   * Идентификатор профессиональной области
   * @example "21"
   */
  profarea_id: string;
  /**
   * Название профессиональной области
   * @example "Транспорт, логистика"
   */
  profarea_name: string;
}

/** История откликов/приглашений по резюме */
export interface ResumesResumeNegotiationsHistoryResponse {
  /** Массив вакансий */
  vacancies: ResumesResumeNegotiationsHistoryVacancy[];
}

/** Вакансия, связанная с резюме */
export interface ResumesResumeNegotiationsHistoryVacancy {
  /** Признак того, что вакансия находится в архиве */
  archived: boolean;
  /** Признак того, что менеджер может редактировать данные вакансии, а также работать с информацией об откликах/приглашениях по этой вакансии */
  can_edit: boolean;
  /** Уникальный идентификатор вакансии */
  id: string;
  /** Список последних изменений состояний откликов/приглашений по указанному резюме и данной вакансии */
  items: ResumesResumeNegotiationsHistoryVacancyItem[];
  /** URL, на который необходимо делать GET запрос для получения [списка сообщений в отклике/приглашении](https://github.com/hhru/api/blob/master/docs/employer_negotiations.md#get-messages). Если `can_edit` равно `false`, значение поля должно игнорироваться */
  messages_url: string;
  /** Название вакансии */
  name: string;
  /** URL, на который необходимо делать GET-запрос для получения [данных об отклике/приглашении](https://github.com/hhru/api/blob/master/docs/employer_negotiations.md#get-negotiation). Если `can_edit` равно `false`, значение поля должно игнорироваться */
  negotiations_url: string;
  /** URL, на который необходимо делать GET-запрос для [получения данных о вакансии](#tag/Vakansii/operation/get-vacancy) */
  url: string;
}

/** Изменение состояния откликов/приглашений */
export interface ResumesResumeNegotiationsHistoryVacancyItem {
  /** Дата изменения состояния отклика/приглашения */
  created_at: string;
  /** Отклик/приглашение */
  employer_state: object & IncludesIdName;
  /** Признак того, что при изменении состояния отклика/приглашения было отправлено сообщение соискателю */
  with_message: boolean;
}

/** Успешный ответ */
export type VacanciesVacancyListResponse = VacanciesActiveListItems | VacanciesMatchListItems;

/** Список вакансий, подходящих под резюме (?resume_id={resume_id}) */
export type VacanciesMatchListItems = {
  /**
   * Список вакансий, подходящих под резюме
   * @minItems 0
   */
  items: VacanciesMatchListItem[];
} & IncludesPagination;

/** Информация о вакансии, подходящей под резюме */
export type VacanciesMatchListItem = VacanciesVacancyShort & VacanciesMatchVacancyFields;

export interface VacanciesMatchVacancyFields {
  address?: VacanciesAddress | null;
  /** Можно ли пригласить соискателя на данную вакансию */
  can_invite: boolean;
  /** Дата и время публикации вакансии */
  created_at: string;
  /** Работодательское состояние отклика/приглашения для этой вакансии с указанным резюме, либо `null` если отклика/приглашения не было. Возможные значения перечислены в поле `employer_states` в [списке работодательских состояний по вакансии](https://github.com/hhru/api/blob/master/docs/employer_negotiations.md#states) */
  employer_negotiations_state: IncludesIdName | IncludesNullableObject | null;
  manager: VacancyManagerOutput;
  /**
   * Действия для [создания отклика](https://github.com/hhru/api/blob/master/docs/employer_negotiations.md#add-invite). Если создать отклик невозможно (например, нет нужных услуг), то вернется пустой массив
   * @minItems 0
   */
  negotiations_actions: VacancyNegotiationActions[];
  /** Состояние отклика/приглашения для этой вакансии с указанным резюме, либо `null` если отклика/приглашения не было. Возможные значения перечислены в поле `negotiations_state` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  negotiations_state: IncludesIdName | IncludesNullableObject | null;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: number | null;
  /** Шаблоны писем */
  templates?: VacancyTemplates[];
}

export type VacanciesAddress = VacancyAddressRawOutput & {
  /** показывать только метро для указанного адреса */
  show_metro_only?: boolean | null;
};

/** Шаблон */
export interface VacancyTemplates {
  /** Идентификатор шаблона */
  id: string;
  /** Название шаблона */
  name: string;
  /** Ссылка на шаблон */
  url: string;
}

/** Действия по отклику/приглашению */
export interface VacancyNegotiationActions {
  /** Обязательные и дополнительные аргументы для запроса */
  arguments: VacancyArguments[];
  /** Возможно ли совершить действие */
  enabled: boolean;
  /** Идентификатор действия */
  id: string;
  /** HTTP метод, который необходимо выполнить */
  method: string;
  /** Название действия */
  name: string;
  /** [Работодательское состояние](https://github.com/hhru/api/blob/master/docs/employer_negotiations.md#term-employer-state) по отклику/приглашению, которое будет установлено после совершения действия. Если действие не меняет состояние — `null` */
  resulting_employer_state?: IncludesIdName | IncludesNullableObject | null;
  /** Шаблоны писем */
  templates: VacancyTemplates[];
  /** URL, на который необходимо выполнить запрос */
  url: string;
}

/** Аргумент для запроса */
export interface VacancyArguments {
  /**
   * Идентификатор аргумента. Возможные значения:
   *
   * * `resume_id` — идентификатор резюме.
   * * `vacancy_id` — идентификатор вакансии.
   * * `message` — сообщение, которое будет отправлено соискателю на электронную почту. Используйте [шаблоны](https://github.com/hhru/api/blob/master/docs/negotiation_message_templates.md) для получения текстов.
   * * `send_sms` — уведомлять ли соискателя о приглашении с помощью SMS. Значение по умолчанию — `false`. Обратите внимание: в SMS-сообщении используется стандартный текст, изменить его нельзя
   * * `address_id` — идентификатор [адреса](#tag/Adresa-rabotodatelya), который будет указан в приглашении
   */
  id: "resume_id" | "vacancy_id" | "message" | "send_sms" | "address_id";
  /** Обязательность аргумента */
  required: boolean;
  /** Идентификаторы аргументов, которые необходимо приложить, если указан данный аргумент. Например, адрес является необязательным, но при его указании необходимо указать также и сообщение */
  required_arguments: IncludesId[];
}

/** Менеджер */
export interface VacancyManagerOutput {
  /** Имя менеджера */
  first_name: string;
  /** контактное лицо (менеджер) по размещаемой вакансии, по умолчанию текущий пользователь */
  id: string;
  /** Фамилия менеджера */
  last_name: string;
  /** Второе имя менеджера */
  middle_name: string;
}

/** Список опубликованных вакансий (?resume_id не задан) */
export type VacanciesActiveListItems = {
  /**
   * Список опубликованных вакансий
   * @minItems 0
   */
  items: VacanciesActiveListItem[];
} & IncludesPagination;

/** Информация об опубликованной вакансии */
export type VacanciesActiveListItem = VacanciesVacancyShort & VacancyBillingTypeObject & VacanciesActiveVacancyFields;

export interface VacancyBillingTypeObject {
  /** Биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  billing_type?: VacancyBillingTypeOutput;
}

export interface VacanciesActiveVacancyFields {
  address?: VacanciesAddress | null;
  /** Можно ли улучшить биллинговый тип вакансии */
  can_upgrade_billing_type: VacancyCanUpgradeBillingType;
  counters: VacancyCountersForActive;
  /** Дата и время публикации вакансии */
  created_at: string;
  /** Дата и время окончания публикации вакансии */
  expires_at: VacancyExpiresAt;
  /** Есть ли в откликах/приглашениях по данной вакансии обновления, требующие внимания */
  has_updates: VacancyHasUpdates;
  manager: VacancyManagerOutput;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: number | null;
}

/**
 * Улучшение биллингового типа
 * Можно ли улучшить биллинговый тип вакансии
 */
export type VacancyCanUpgradeBillingType = boolean;

/**
 * Обновление по данной вакансии
 * Есть ли в откликах/приглашениях по данной вакансии обновления, требующие внимания
 */
export type VacancyHasUpdates = boolean;

/**
 * Date and time
 * Дата и время окончания публикации вакансии
 */
export type VacancyExpiresAt = string;

/** Счетчики */
export interface VacancyCountersForActive {
  /** Общее количество звонков */
  calls?: number;
  /** Количество приглашений на вакансию */
  invitations: number;
  /** Количество откликнувшихся и приглашенных соискателей на вакансию */
  invitations_and_responses?: number;
  /** Общее количество новых пропущенных звонков */
  new_missed_calls?: number;
  /** Количество откликов на вакансию */
  responses: number;
  /** Количество резюме в работе на вакансию */
  resumes_in_progress: number;
  /** Количество непросмотренных откликов на вакансию */
  unread_responses: number;
  /** Количество просмотров вакансии */
  views: number;
}

/** Успешный ответ */
export type AuthUserTokenAndAppToken = AuthUserToken | AuthAppToken;

/** Авторизация приложения */
export interface AuthAppToken {
  access_token: string;
  /** Тип выданного токена. Всегда принимает значение `bearer`. */
  token_type: "bearer";
}

/** Авторизация пользователя */
export interface AuthUserToken {
  access_token: string;
  /**
   * Время жизни токена в секундах.
   * @format int64
   * @min 0
   */
  expires_in: number;
  /** Токен, который можно использовать для продления срока жизни соответствующего access токена. */
  refresh_token: string;
  /** Тип выданного токена. Всегда принимает значение `bearer`. */
  token_type: "bearer";
}

export type VacanciesVacancy =
  | VacanciesVacancyForApplicant
  | VacanciesVacancyForManager
  | (VacanciesVacancyForApplicant & VacanciesVacancyForManager);

/** Информация о вакансии при запросе от соискателя */
export type VacanciesVacancyForApplicant = VacanciesVacancyCommonFields &
  VacancyBillingTypeObject &
  VacancyAddressCommon;

export interface VacanciesVacancyCommonFields {
  /** Указание, что вакансия доступна для соискателей с инвалидностью */
  accept_handicapped: VacancyAcceptHandicapped;
  /** разрешен ли отклик на вакансию неполным резюме */
  accept_incomplete_resumes: VacancyAcceptIncompleteResumes;
  /** Указание, что вакансия доступна для соискателей старше 14 лет [подробнее](https://github.com/hhru/api/blob/master/docs/employer_vacancies_accept_kids.md#accept-kids) */
  accept_kids: VacancyAcceptKids;
  /** указание, что вакансия доступна с временным трудоустройством */
  accept_temporary?: VacancyAcceptTemporary;
  /** возможность [переписки с кандидатами](https://inboxemp.hh.ru/) по данной вакансии */
  allow_messages: VacancyAllowMessages;
  /** Ссылка на представление вакансии на сайте */
  alternate_url: VacancyAlternateUrl;
  /** Ссылка на отклик на вакансию на сайте */
  apply_alternate_url: VacancyApplyAlternateUrl;
  /** Находится ли данная вакансия в архиве */
  archived: VacancyArchived;
  area: IncludesArea;
  /** Биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  billing_type: VacancyBillingTypeOutput;
  branded_description?: VacancyBrandedDescription | IncludesNullableObject | null;
  /** внутренний код вакансии */
  code?: VacancyCode;
  /**
   * Информация о жалобе на вакансию. Возвращается только соискателю при наличии у приложения права `complaint_about_employer`.
   *
   * Для включения информации о жалобах в выдачу полной вакансии, необходимо передать флаг `with_complaint_about_employer`
   */
  complaint_about_employer?: VacancyComplaintAboutEmployer;
  /** Контактная информация */
  contacts?: VacancyContactsOutput;
  /** Дата и время публикации вакансии */
  created_at: VacancyCreatedAt;
  department?: VacancyDepartmentOutput | IncludesNullableObject | null;
  /** описание в html, не менее 200 символов */
  description: VacancyDescription;
  /** список требуемых категорий водительских прав */
  driver_license_types: VacancyDriverLicenseTypes;
  employer?: VacanciesVacancyEmployer | IncludesNullableObject;
  employment?: VacancyEmploymentOutput;
  experience: VacancyExperienceOutput;
  /** Информация о наличии прикрепленного тестового задании к вакансии */
  has_test: VacancyHasTest;
  /** Идентификатор вакансии */
  id: VacancyId;
  /** Дата и время создания вакансии */
  initial_created_at: VacancyInitialCreatedAt;
  insider_interview?: VacancyInsiderInterview | IncludesNullableObject | null;
  /** Список ключевых навыков, не более 30 */
  key_skills: VacancyKeySkills;
  languages?: VacancyLanguagesOutput | IncludesNullableObject | null;
  /** Название */
  name: VacancyName;
  /** Ссылка для получения списка откликов/приглашений */
  negotiations_url?: string | null;
  /** Является ли данная вакансия премиум-вакансией */
  premium: VacancyPremium;
  /** список профессиональных ролей */
  professional_roles: VacancyProfessionalRolesOutput;
  /** Дата и время публикации вакансии */
  published_at: VacancyCreatedAt;
  /** Возвращает связи соискателя с вакансией. Значения из поля `vacancy_relation` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries). */
  relations?: VacancyRelations;
  /** Обязательно ли заполнять сообщение при отклике на вакансию */
  response_letter_required: VacancyResponseLetterRequired;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: VacancyResponseUrl;
  /** Зарплата */
  salary?: VacancySalary;
  schedule: VacancyScheduleOutput;
  /**
   * Список специализаций. Элементы справочника [specializations](https://github.com/hhru/api/blob/master/docs/specializations.md)
   * @deprecated
   */
  specializations: VacancySpecializationsOutput;
  /** Подходящие резюме на вакансию */
  suitable_resumes_url?: string | null;
  /** объект - [тест](#tag/Spravochniki-rabotodatelya/operation/get-tests-dictionary) для вакансии */
  test?: VacancyDraftTest;
  type: IncludesIdName;
  vacancy_constructor_template?: VacancyVacancyConstructorTemplate | IncludesNullableObject | null;
  /** список рабочих дней */
  working_days?: VacancyWorkingDaysOutput;
  /** список с временными интервалами работы */
  working_time_intervals?: VacancyWorkingTimeIntervalsOutput;
  /** список режимов времени работы */
  working_time_modes?: VacancyWorkingTimeModesOutput;
}

/**
 * Интервалы работы
 * список с временными интервалами работы
 */
export type VacancyWorkingTimeIntervalsOutput = VacancyWorkingTimeIntervalItemOutput[] | null;

export type VacancyWorkingTimeIntervalItemOutput =
  | (VacancyWorkingTimeIntervalItem & {
      /** название интервала работы */
      name?: string;
    })
  | null;

/** Опыт работы */
export type VacancyExperienceOutput =
  | (VacancyExperience & {
      /** название опыта работы */
      name?: string;
    })
  | null;

/**
 * Режимы работы
 * список режимов времени работы
 */
export type VacancyWorkingTimeModesOutput = VacancyWorkingTimeModeItemOutput[] | null;

export type VacancyWorkingTimeModeItemOutput =
  | (VacancyWorkingTimeModeItem & {
      /** название интервала работы */
      name?: string;
    })
  | null;

/** Дата и время публикации вакансии */
export type VacancyCreatedAt = string;

/**
 * Шаблон конструктора вакансии
 * Информация по примененному брендированному шаблону конструктора вакансии. Поддерживается только две картинки: верхняя — в шапке вакансии, нижняя — в самом низу
 */
export interface VacancyVacancyConstructorTemplate {
  /** Информация по нижней картинке шаблона */
  bottom_picture?: IncludesNullableObject | VacancyPicture | null;
  /** ID шаблона */
  id?: number;
  /** Название шаблона */
  name?: string;
  /** Информация по верхней картинке шаблона */
  top_picture?: VacancyPicture;
}

export interface VacancyPicture {
  /** Путь до маленькой (порядка 4% от изначального размера) размытой картинки. При показе ее нужно преобразовать к нужному размеру */
  blurred_path?: string | null;
  /** Высота картинки */
  height?: number;
  /** Адрес картинки */
  path?: string;
  /** Ширина картинки */
  width?: number;
}

/** Является ли данная вакансия премиум-вакансией */
export type VacancyPremium = boolean;

/**
 * Строка с кодом HTML (возможно наличие `<script/>` и `<style/>`), которая является альтернативой стандартному описанию вакансии.
 *
 * HTML адаптирован для мобильных устройств и корректно отображается без поддержки JavaScript. При этом:
 *
 * * Содержимое растягивается на 100% ширины контейнера и умещается в 300px без прокрутки.
 * * Содержимое рассчитано на то, что оно будет вставлено в обвязку, в которую входит название, требуемый опыт работы, регион, тип занятости и рабочего дня вакансии, а также ссылка на компанию, опубликовавшую вакансию.
 * * Изображения, которые могут встретиться в таком описании, адаптированы под Retina-дисплеи.
 * * Размер шрифта не меньше 12px, размер межстрочного интервала не меньше 16px.
 *
 * Значение может быть `null`, если у вакансии отсутствует индивидуальное описание
 */
export type VacancyBrandedDescription = string;

export type VacanciesVacancyEmployer = VacanciesEmployerPublic &
  VacancyEmployerBlacklisted &
  IncludesEmployerApplicantServicesObject &
  VacancyEmployerBages;

/** Информация о компании работодателя */
export interface VacancyEmployerBlacklisted {
  /** Добавлены ли все вакансии работодателя в [список скрытых](#tag/Skrytye-rabotodateli) */
  blacklisted?: boolean;
}

export type VacancyEmployerBages = object;

export interface IncludesEmployerApplicantServicesObject {
  /** Информация о подключенных услугах соискателя, относящихся к данному работодателю */
  applicant_services?: IncludesEmployerApplicantServices;
}

/**
 * Услуги соискателя
 * Информация о подключенных услугах соискателя, относящихся к данному работодателю
 */
export interface IncludesEmployerApplicantServices {
  /** Услуга \"Хочу тут работать\" */
  target_employer?: {
    /** Количество резюме текущего соискателя, к которым подключена услуга \"Хочу тут работать\" */
    count?: number;
  };
}

/** Находится ли данная вакансия в архиве */
export type VacancyArchived = boolean;

/** Контактная информация */
export type VacancyContactsOutput = {
  /** Флаг подключения виртуального номера */
  call_tracking_enabled?: boolean | null;
  /** Электронная почта. Значение поля должно соответствовать формату email. */
  email?: string | null;
  /** Имя контакта */
  name?: string | null;
  /** Список телефонов для связи */
  phones?: VacancyPhoneItem[] | null;
};

/**
 * Список рабочих дней
 * список рабочих дней
 */
export type VacancyWorkingDaysOutput = VacancyWorkingDayItemOutput[] | null;

export type VacancyWorkingDayItemOutput =
  | (VacancyWorkingDayItem & {
      /** название рабочего дня */
      name?: string;
    })
  | null;

/**
 * Профессиональные роли
 * список профессиональных ролей
 */
export type VacancyProfessionalRolesOutput = VacancyProfessionalRoleItemOutput[];

export type VacancyProfessionalRoleItemOutput = VacancyProfessionalRoleItem & {
  /** название профессиональной роли */
  name?: string;
};

/** Список специализаций. Элементы справочника [specializations](https://github.com/hhru/api/blob/master/docs/specializations.md) */
export type VacancySpecializationsOutput = VacancySpecializationItemOutput[];

/** Объект специализаций */
export interface VacancySpecializationItemOutput {
  /** Идентификатор специализации */
  id: string;
  /** Название специализации */
  name: string;
  /** Идентификатор профессиональной области, в которую входит специализация */
  profarea_id: string;
  /** Название профессиональной области, в которую входит специализация */
  profarea_name: string;
}

/** Ссылка на представление вакансии на сайте */
export type VacancyAlternateUrl = string;

/**
 * Информация о жалобе на вакансию. Возвращается только соискателю при наличии у приложения права `complaint_about_employer`.
 *
 * Для включения информации о жалобах в выдачу полной вакансии, необходимо передать флаг `with_complaint_about_employer`
 */
export interface VacancyComplaintAboutEmployer {
  /** Наличие жалобы на вакансию */
  exists?: boolean;
}

/** Идентификатор вакансии */
export type VacancyId = string;

/** Ссылка на отклик на вакансию на сайте */
export type VacancyApplyAlternateUrl = string;

/** Информация о наличии прикрепленного тестового задании к вакансии */
export type VacancyHasTest = boolean;

/**
 * Языки вакансии
 * список языков вакансии
 */
export type VacancyLanguagesOutput = VacancyLanguageOutput[];

export type VacancyLanguageOutput = VacancyLanguage & {
  level?: {
    /** идентификатор уровня владения языком */
    id: string;
    /** название уровня владения языком */
    name: string;
  };
  /** название языка */
  name: string;
};

/** Тип занятости */
export type VacancyEmploymentOutput =
  | (VacancyEmployment & {
      /** название типа занятости */
      name?: string;
    })
  | null;

/** График работы */
export type VacancyScheduleOutput = VacancySchedule & {
  /** Название графика работы */
  name?: string;
};

/** Дата и время создания вакансии */
export type VacancyInitialCreatedAt = string;

/** Адрес */
export type VacancyAddressCommon = {
  address?: VacancyAddressOutput | IncludesNullableObject | null;
};

/** адрес */
export type VacancyAddressOutput = GeocoderAddress & {
  /** описание */
  description?: string | null;
} & {
  /** @minItems 0 */
  metro_stations?: IncludesMetroStation[];
};

/** адрес */
export type GeocoderAddress = {
  /** дом */
  building?: string | null;
  /** город */
  city?: string | null;
  /** широта */
  lat?: number | null;
  /** долгота */
  lng?: number | null;
  /** улица */
  street?: string | null;
};

/** Информация о вакансии при запросе от менеджера */
export type VacanciesVacancyForManager = VacanciesVacancyCommonFields &
  VacancyBillingTypeObject &
  VacanciesVacancyManagerFields;

export interface VacanciesVacancyManagerFields {
  address: VacanciesAddress;
  archived_at?: VacancyArchivedAt | IncludesNullableObject | null;
  /** Предпочитаемый брендированный шаблон вакансий работодателя либо `null`, если не используется у компании. */
  branded_template: VacancyBrandedTemplate;
  /** Можно ли улучшить биллинговый тип вакансии */
  can_upgrade_billing_type: VacancyCanUpgradeBillingType;
  counters?: VacancyCountersOutput;
  /** Дата и время окончания публикации вакансии */
  expires_at: VacancyExpiresAt;
  /** Удалена ли вакансия (скрыта из архива) */
  hidden: VacancyHidden;
  manager: VacancyManager;
  /** Уведомлять ли менеджера о новых откликах */
  response_notifications: VacancyResponseNotifications;
}

/** Дата архивации вакансии */
export type VacancyArchivedAt = string;

export interface VacancyCountersOutput {
  /** Общее количество звонков */
  calls: number;
  /** Количество приглашений на вакансию */
  invitations: number;
  /** Количество откликнувшихся и приглашенных соискателей на вакансию */
  invitations_and_responses: number;
  /** Общее количество новых пропущенных звонков */
  new_missed_calls: number;
  /** Количество откликов на вакансию */
  responses: number;
  /** Количество резюме в работе на вакансию */
  resumes_in_progress: number;
  /** Количество непросмотренных откликов на вакансию */
  unread_responses: number;
  /** Количество просмотров вакансии */
  views: number;
}

/** Удалена ли вакансия (скрыта из архива) */
export type VacancyHidden = boolean;

/**
 * Подсказки по регионам
 * Подсказки по регионам
 */
export interface SuggestsAreas {
  /**
   * Массив регионов
   * Информация о найденных регионах
   */
  items: SuggestsAreasItem[];
}

export interface SuggestsAreasItem {
  /** Идентификатор региона */
  id: string;
  /** Название региона */
  text: string;
  /** URL региона */
  url: string;
}

/** Ошибки */
export type ErrorsCombinationsBadAuthVacancyError =
  | ErrorsBadAuthorizationErrors
  | ErrorsBadAuthorizationVacancyErrors
  | (ErrorsBadAuthorizationErrors & ErrorsBadAuthorizationVacancyErrors);

/**
 * Ошибки добавления вакансии в отобранное
 * Информация о возникших ошибках
 */
export type ErrorsBadAuthorizationVacancyErrors = ErrorsErrorRequestId & {
  /**
   * Описание ошибки
   * @example "Forbidden"
   */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadAuthorizationVacancyError[];
};

/** Ошибка добавления вакансии в отобранные */
export interface ErrorsBadAuthorizationVacancyError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "vacancies_favorited"
   */
  type: "vacancies_favorited";
  /**
   * Возможные ошибки:
   *   * `vacancy_archived` — Вакансия уже в архиве и не может быть добавлена в отобранное
   *   * `limit_exceeded` — Превышен лимит количества отобранных вакансий
   * @example "vacancy_archived"
   */
  value: "vacancy_archived" | "limit_exceeded";
}

/**
 * Общие ошибки авторизации
 * Информация о возникших ошибках
 */
export type ErrorsBadAuthorizationErrors = ErrorsErrorRequestId & {
  /**
   * Описание ошибки
   * @example "Forbidden"
   */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadAuthorizationErrorsScope[];
  /**
   * Ошибки авторизации:
   *   * `token-revoked` — Токен отозван пользователем, приложению необходимо [запросить новую авторизацию](#tag/Avtorizaciya-rabotodatelya/operation/authorize)
   *   * `token-expired` — Время жизни `access_token` завершилось, необходимо [получить `refresh_token`](#tag/Avtorizaciya-rabotodatelya/operation/authorize)
   * @example "token-revoked"
   */
  oauth_error?: "token-revoked" | "token-expired";
};

export type ErrorsBadAuthorizationErrorsScope =
  | ErrorsBadAuthorizationError
  | ErrorsBadAuthorizationEmployerError
  | (ErrorsBadAuthorizationError & ErrorsBadAuthorizationEmployerError);

/** Ошибка авторизации работодателя */
export interface ErrorsBadAuthorizationEmployerError {
  /**
   * Список доступных для токена аккаунтов менеджера в случае, если используемый рабочий аккаунт заблокирован.
   * Актуально только в случае авторизации работодателя.
   * @minItems 1
   */
  allowed_accounts?: ManagerAccount[];
  /**
   * Текстовый идентификатор типа ошибки
   * @example "oauth"
   */
  type: "forbidden" | "oauth" | "manager_extra_accounts" | "manager_accounts";
  /**
   * Общие ошибки:
   *   * `bad_authorization` — Токен авторизации не существует или не валидный
   *   * `token_expired` — Время жизни access_token завершилось, необходимо [выполнить обновление access_token](#refresh_token)
   *   * `token_revoked` — Токен отозван пользователем, приложению необходимо [запросить новую авторизацию](#section/Tipy-avtorizacij)
   *   * `application_not_found` — Ваше приложение было удалено
   *   * `used_manager_account_forbidden` — [Рабочий аккаунт заблокирован](https://github.com/hhru/api/blob/master/docs/errors.md#manager-accounts-blocked)
   *   * `manager_extra_account_not_found` — В заголовке передан некорректный id аккаунта
   *   * `user_auth_expected` — Передана авторизация приложения, метод требует [авторизации пользователя](#get-auth)
   *   * `application_auth_expected` — Передана авторизация пользователя, метод требует [авторизации приложения](#get-client-auth)
   * @example "bad_authorization"
   */
  value?:
    | "bad_authorization"
    | "token_expired"
    | "token_revoked"
    | "application_not_found"
    | "manager_extra_account_not_found"
    | "used_manager_account_forbidden"
    | "user_auth_expected"
    | "application_auth_expected";
}

/**
 * Рабочий аккаунт менеджера
 * Информация о рабочем аккаунте менеджера
 */
export interface ManagerAccount {
  /** Информация о компании, к которой прикреплен рабочий аккаунт менеджера */
  employer: ManagerAccountCompany;
  /**
   * Идентификатор рабочего аккаунта менеджера
   * @example "12345678"
   */
  id: string;
}

/**
 * Компания
 * Информация о компании, к которой прикреплен рабочий аккаунт менеджера
 */
export interface ManagerAccountCompany {
  /**
   * Идентификатор компании
   * @example "1455"
   */
  id: string;
  /**
   * Название компании
   * @example "HeadHunter"
   */
  name: string;
}

/** Общая ошибка авторизации */
export interface ErrorsBadAuthorizationError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "oauth"
   */
  type: "forbidden" | "oauth";
  /**
   * Общие ошибки:
   *   * `bad_authorization` — Токен авторизации не существует или не валидный
   *   * `token_expired` — Время жизни access_token завершилось, необходимо [выполнить обновление access_token](#section/Avtorizaciya/Obnovlenie-pary-access-i-refresh-tokenov)
   *   * `token_revoked` — Токен отозван пользователем, приложению необходимо [запросить новую авторизацию](#section/Tipy-avtorizacij)
   *   * `application_not_found` — Ваше приложение было удалено
   *   * `user_auth_expected` — Передана авторизация приложения, метод требует [авторизации пользователя](#get-auth)
   *   * `application_auth_expected` — Передана авторизация пользователя, метод требует [авторизации приложения](#get-client-auth)
   *   * `used_manager_account_forbidden` — [Рабочий аккаунт заблокирован](https://github.com/hhru/api/blob/master/docs/errors.md#manager-accounts-blocked)
   *   * `manager_extra_account_not_found` — В заголовке передан некорректный id аккаунта
   *   * `user_auth_expected` — Передана авторизация приложения, метод требует [авторизации пользователя](#section/Avtorizaciya/Avtorizaciya-polzovatelya)
   *   * `application_auth_expected` — Передана авторизация пользователя, метод требует [авторизации приложения](##section/Avtorizaciya/Avtorizaciya-prilozheniya)
   * @example "bad_authorization"
   */
  value?:
    | "bad_authorization"
    | "token_expired"
    | "token_revoked"
    | "application_not_found"
    | "user_auth_expected"
    | "application_auth_expected";
}

/**
 * Ошибки авторизации пользователя
 * Информация о возникших ошибках
 */
export type ErrorsBadAuthorizationSavedSearchErrors = ErrorsErrorRequestId & {
  /**
   * Описание ошибки
   * @example "Forbidden"
   */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadAuthorizationSavedSearchError[];
};

/** Ошибка авторизации пользователя */
export interface ErrorsBadAuthorizationSavedSearchError {
  /**
   * Список доступных для токена аккаунтов менеджера в случае, если используемый рабочий аккаунт заблокирован.
   * Актуально только в случае авторизации работодателя.
   * @minItems 1
   */
  allowed_accounts?: ManagerAccount[];
  /**
   * Текстовый идентификатор типа ошибки
   * @example "oauth"
   */
  type: "saved_searches" | "forbidden" | "oauth";
  /**
   * Возможные ошибки:
   * * `cant_send_to_yourself` — Нельзя передать сохраненный поиск самому себе
   * * `user_auth_expected` — Передана авторизация приложения, метод требует [авторизации пользователя](#section/Avtorizaciya/Avtorizaciya-polzovatelya)
   * @example "user_auth_expected"
   */
  value?: "cant_send_to_yourself" | "user_auth_expected";
}

/** Объект с подписками */
export interface WebhookSubscriptionsOutput {
  /**
   * Cписок подписок пользователя
   * @minItems 0
   */
  items: WebhookSubscriptionItem[];
}

/** Подписка пользователя */
export type WebhookSubscriptionItem = WebhookSubscriptionCommonItem & {
  /**
   * Идентификатор подписки
   * @example "q1ww2e2r4ty"
   */
  id: string;
};

/** Найденные работодатели */
export type ResumesResumeVisibilityListSearchResponse = IncludesPagination &
  ResumesResumeVisibilityListSearchProperties;

export interface ResumesResumeVisibilityListSearchProperties {
  /** Список работодателей */
  items: (ResumesGetResumeVisibilityListItem & ResumesSelectedObject)[];
}

/** Список работодателей */
export interface ResumesGetResumeVisibilityListItem {
  /** Ссылка на описание работодателя на сайте */
  alternate_url: string;
  /** Идентификатор работодателя */
  id: string;
  /** Ссылка на логотип работодателя. Клиент должен предусмотреть вероятность отсутствия ресурса по указанной ссылке */
  logo_urls: IncludesLogoUrls90;
  /** Название работодателя */
  name: string;
  /** Ссылка на детальное описание работодателя */
  url: string;
}

/** Ссылка на логотип */
export interface IncludesLogoUrls90 {
  /** URL логотипа с размером менее 90px по меньшей стороне */
  "90": string;
}

export interface ResumesSelectedObject {
  /** Присутствует ли работодатель в списке видимости резюме */
  selected: boolean;
}

/** Ошибки */
export type ErrorsCombinationsBadAuthAddEditVacancyError =
  | ErrorsBadAuthorizationErrors
  | ErrorsBadAuthorizationAddEditVacancyErrors
  | (ErrorsBadAuthorizationErrors & ErrorsBadAuthorizationAddEditVacancyErrors);

/**
 * Ошибки авторизации при публикации и редактировании вакансии
 * Информация о возникших ошибках
 */
export type ErrorsBadAuthorizationAddEditVacancyErrors = ErrorsErrorRequestId & {
  /**
   * Описание ошибки
   * @example "Forbidden"
   */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadAuthorizationAddEditVacancyError[];
};

/** Ошибка авторизации при публикации и редактировании вакансии */
export interface ErrorsBadAuthorizationAddEditVacancyError {
  /**
   * Общее количество дубликатов вакансии. Возвращается только для `"value": "duplicate"`
   * @example 2
   */
  found?: number | null;
  /** Ограниченное количество записей с информацией о дубликатах. Не гарантирует выдачу всех дубликатов. Возвращается только для `"value": "duplicate"` */
  items?: IncludesNumericId[] | null;
  /**
   * Текстовый идентификатор типа ошибки
   * @example "vacancies"
   */
  type: "vacancies";
  /**
   * Ошибки при публикации и редактировании вакансии:
   *   * `not_enough_purchased_services` — купленных услуг недостаточно для публикации или обновления данного типа вакансии
   *   * `quota_exceeded` — квота менеджера на публикацию данного типа вакансии закончилась
   *   * `duplicate` — аналогичная вакансия уже опубликована. В ответе передается информация по дубликатам вакансии. Данную ошибку можно форсировано отключить параметром `?ignore_duplicates=true`
   *   * `creation_forbidden` — публикация вакансий недоступна текущему менеджеру
   *   * `unavailable_for_archived` — редактирование недоступно для архивной вакансии
   *   * `conflict_changes` — [конфликтные изменения](https://github.com/hhru/api/blob/master/docs/employer_vacancies.md#%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B1%D0%B8%D0%BB%D0%BB%D0%B8%D0%BD%D0%B3-%D1%82%D0%B8%D0%BF%D0%B0-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B8) данных вакансии
   * @example "not_enough_purchased_services"
   */
  value:
    | "not_enough_purchased_services"
    | "quota_exceeded"
    | "duplicate"
    | "creation_forbidden"
    | "unavailable_for_archived"
    | "conflict_changes";
}

export interface IncludesNumericId {
  /** Идентификатор */
  id: number;
}

/**
 * Ошибки в параметрах запроса
 * Информация о возникших ошибках
 */
export type ErrorsBadArgumentResumeVisibilityErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadArgumentResumeVisibilityError[];
};

/** Ошибка в параметре запроса */
export interface ErrorsBadArgumentResumeVisibilityError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_argument"
   */
  type: "bad_argument" | "resume_visibility_list";
  /**
   * Название поля с ошибкой:
   *
   * - `per_page` — передано невалидное количество элементов на странице (максимум 100).
   * - `unknown_employer` — передан неизвестный идентификатор работодателя.
   * - `limit_exceeded` — превышен лимит списка видимости.
   * - `too_many_employers` — передано слишком много работодателей.
   * - `id` — передан невалидный идентификатор работодателя
   * @example "per_page"
   */
  value: "per_page" | "unknown_employer" | "limit_exceeded" | "too_many_employers";
}

/** Справочники полей и сущностей, используемых в API */
export interface DictionariesDictResponse {
  /**
   * Прочие справочники
   * Тип доступа для комментария к соискателю
   */
  applicant_comment_access_type: IncludesIdName[];
  /**
   * Прочие справочники
   * Типы сортировки [списка комментариев к соискателю](#tag/Kommentarii-k-soiskatelyu/operation/get-applicant-comments-list)
   */
  applicant_comments_order: IncludesIdName[];
  /**
   * Справочник для откликов/приглашений
   * Статусы откликов/приглашений
   */
  applicant_negotiation_status: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Готовность к командировкам
   */
  business_trip_readiness: IncludesIdName[];
  /**
   * Прочие справочники
   * Справочник валют
   */
  currency: DictionariesCurrencyItem[];
  /**
   * Справочник для полей, используемых в резюме
   * Категории водительских прав
   */
  driver_license_types: IncludesId[];
  /**
   * Справочник для полей, используемых в резюме
   * Образование в резюме
   */
  education_level: IncludesIdName[];
  /**
   * Справочник для сортировки вакансий работодателя
   * Тип сортировки списка опубликованных вакансий
   */
  employer_active_vacancies_order: IncludesIdName[];
  /**
   * Справочник для сортировки вакансий работодателя
   * Тип сортировки списка архивных вакансий
   */
  employer_archived_vacancies_order: IncludesIdName[];
  /**
   * Справочник для сортировки вакансий работодателя
   * Тип сортировки скрытых вакансий
   */
  employer_hidden_vacancies_order?: IncludesIdName[];
  /**
   * Прочие справочники
   * Типы связи компании с пользователем
   */
  employer_relation: IncludesIdName[];
  /**
   * Прочие справочники
   * Тип работодателя
   */
  employer_type: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Тип занятости
   */
  employment: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Опыт работы
   */
  experience: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Пол
   */
  gender: IncludesIdName[];
  /**
   * Прочие справочники
   * Статусы поиска соискателей для установки и отображения самому соискателю
   */
  job_search_statuses_applicant: IncludesIdName[];
  /**
   * Прочие справочники
   * Статусы поиска соискателей для отображения работодателям
   */
  job_search_statuses_employer: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Уровень владения языком
   */
  language_level: IncludesIdName[];
  /**
   * Справочник для откликов/приглашений
   * Статус возможности отправки сообщения в переписке
   */
  messaging_status: IncludesIdName[];
  /**
   * Справочник для откликов/приглашений
   * Типы порядка отображения откликов
   */
  negotiations_order: IncludesIdName[];
  /**
   * Справочник для откликов/приглашений
   * Типы участников переписки
   */
  negotiations_participant_type: IncludesIdName[];
  /**
   * Справочник для откликов/приглашений
   * Типы состояний откликов
   */
  negotiations_state: IncludesIdName[];
  /**
   * Прочие справочники
   * Статус звонка, зафиксированного в системе кол-трекинг
   */
  phone_call_status: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Предпочитаемый способ связи
   */
  preferred_contact_type: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Готовность к переезду
   */
  relocation_type: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Уровень доступа к резюме
   */
  resume_access_type: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Тип сайта в поле «контакты»
   */
  resume_contacts_site_type: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Поля резюме, которые могут быть [скрыты](https://github.com/hhru/api/blob/master/docs/employer_resumes.md#hidden-fields)
   */
  resume_hidden_fields: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Комментарий модератора
   */
  resume_moderation_note: IncludesIdName[];
  /**
   * Справочник параметров поиска резюме
   * Условие поиска по опыту работы
   */
  resume_search_experience_period?: IncludesIdName[];
  /**
   * Справочник параметров поиска резюме
   * Область поиска в резюме
   */
  resume_search_fields?: IncludesIdName[];
  /**
   * Справочник параметров поиска резюме
   * Метки поиска резюме
   */
  resume_search_label?: IncludesIdName[];
  /**
   * Справочник параметров поиска резюме
   * Условие поиска резюме
   */
  resume_search_logic?: IncludesIdName[];
  /**
   * Справочник параметров поиска резюме
   * Тип сортировки резюме
   */
  resume_search_order?: IncludesIdName[];
  /**
   * Справочник параметров поиска резюме
   * Условие поиска по проживанию в регионе и готовности к переезду
   */
  resume_search_relocation?: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Статус резюме
   */
  resume_status: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * График работы
   */
  schedule: IncludesIdName[];
  /**
   * Справочник для полей, используемых в резюме
   * Время в пути
   */
  travel_time: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Варианты размещения вакансии с точки зрения биллинга
   */
  vacancy_billing_type: IncludesIdName[];
  /**
   * Справочник для параметров поиска вакансий
   * Тип кластеров
   */
  vacancy_cluster: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Метки вакансии
   */
  vacancy_label: IncludesIdName[];
  /**
   * Прочие справочники
   * Причины, из-за которых невозможно [продлить вакансию](#tag/Upravlenie-vakansiyami/operation/get-prolongation-vacancy-info)
   */
  vacancy_not_prolonged_reason: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Типы связи вакансии с пользователем
   */
  vacancy_relation: IncludesIdName[];
  /**
   * Справочник для параметров поиска вакансий
   * Область поиска в вакансии
   */
  vacancy_search_fields: IncludesIdName[];
  /**
   * Справочник для параметров поиска вакансий
   * Тип сортировки вакансии
   */
  vacancy_search_order: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Тип вакансии
   */
  vacancy_type: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Рабочие дни
   */
  working_days: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Временные интервалы работы
   */
  working_time_intervals: IncludesIdName[];
  /**
   * Справочник для полей вакансии
   * Режимы времени работы
   */
  working_time_modes: IncludesIdName[];
}

export interface DictionariesCurrencyItem {
  /** Краткое обозначение */
  abbr: string;
  /** Код */
  code: string;
  /** Используется ли в качестве валюты по умолчанию? */
  default: boolean;
  /** Можно ли использовать на данном хосте? */
  in_use: boolean;
  /** Название */
  name: string;
  /** Курс по отношению к рублю */
  rate: number;
}

/** Сгенерированный код */
export interface ResumePhoneGenerateCodeGenerateCode {
  /**
   * Ближайшая возможная повторная отправка кода в секундах
   * @example "15"
   */
  can_request_code_again_in?: string;
  /**
   * Тип сгенерированного сообщения
   * @example "sms"
   */
  notification_type?: string;
}

/** Объект создания черновика вакансии */
export interface VacancyDraftVacancyDraftCreate {
  accept_handicapped?:
    | VacancyAcceptHandicapped
    | IncludesNullableObject
    | (VacancyAcceptHandicapped & IncludesNullableObject);
  accept_incomplete_resumes?:
    | VacancyAcceptIncompleteResumes
    | IncludesNullableObject
    | (VacancyAcceptIncompleteResumes & IncludesNullableObject);
  accept_kids?: VacancyAcceptKids | IncludesNullableObject | (VacancyAcceptKids & IncludesNullableObject);
  accept_temporary?:
    | VacancyAcceptTemporary
    | IncludesNullableObject
    | (VacancyAcceptTemporary & IncludesNullableObject);
  address?: VacancyDraftAddress | IncludesNullableObject | (VacancyDraftAddress & IncludesNullableObject);
  allow_messages?: VacancyAllowMessages | IncludesNullableObject | (VacancyAllowMessages & IncludesNullableObject);
  area?: VacancyArea | IncludesNullableObject | (VacancyArea & IncludesNullableObject);
  areas?: VacancyDraftAreas | IncludesNullableObject | (VacancyDraftAreas & IncludesNullableObject);
  billing_type?: VacancyDraftBillingType | IncludesNullableObject | (VacancyDraftBillingType & IncludesNullableObject);
  branded_template?:
    | VacancyDraftBrandedTemplate
    | IncludesNullableObject
    | (VacancyDraftBrandedTemplate & IncludesNullableObject);
  code?: VacancyDraftCode | IncludesNullableObject | (VacancyDraftCode & IncludesNullableObject);
  contacts?: VacancyDraftContacts | IncludesNullableObject | (VacancyDraftContacts & IncludesNullableObject);
  custom_employer_name?:
    | VacancyCustomEmployerName
    | IncludesNullableObject
    | (VacancyCustomEmployerName & IncludesNullableObject);
  department?: VacancyDepartment | IncludesNullableObject | (VacancyDepartment & IncludesNullableObject);
  description?: VacancyDraftDescription | IncludesNullableObject | (VacancyDraftDescription & IncludesNullableObject);
  driver_license_types?:
    | VacancyDriverLicenseTypes
    | IncludesNullableObject
    | (VacancyDriverLicenseTypes & IncludesNullableObject);
  employer_service_id?: IncludesNullableObject;
  employment?: VacancyDraftEmployment | IncludesNullableObject | (VacancyDraftEmployment & IncludesNullableObject);
  experience?: VacancyExperience | IncludesNullableObject | (VacancyExperience & IncludesNullableObject);
  key_skills?: VacancyDraftKeySkills | IncludesNullableObject | (VacancyDraftKeySkills & IncludesNullableObject);
  languages?: VacancyLanguages | IncludesNullableObject | (VacancyLanguages & IncludesNullableObject);
  name?: VacancyDraftName | IncludesNullableObject | (VacancyDraftName & IncludesNullableObject);
  professional_roles?:
    | VacancyDraftProfessionalRoles
    | IncludesNullableObject
    | (VacancyDraftProfessionalRoles & IncludesNullableObject);
  response_letter_required?:
    | VacancyResponseLetterRequired
    | IncludesNullableObject
    | (VacancyResponseLetterRequired & IncludesNullableObject);
  response_notifications?:
    | VacancyResponseNotifications
    | IncludesNullableObject
    | (VacancyResponseNotifications & IncludesNullableObject);
  response_url?: VacancyDraftResponseUrl | IncludesNullableObject | (VacancyDraftResponseUrl & IncludesNullableObject);
  salary?: VacancySalary | IncludesNullableObject | (VacancySalary & IncludesNullableObject);
  schedule?: VacancySchedule | IncludesNullableObject | (VacancySchedule & IncludesNullableObject);
  test?: VacancyDraftTest | IncludesNullableObject | (VacancyDraftTest & IncludesNullableObject);
  type?: VacancyDraftType | IncludesNullableObject | (VacancyDraftType & IncludesNullableObject);
  with_zp?: VacancyDraftWithZp | IncludesNullableObject | (VacancyDraftWithZp & IncludesNullableObject);
  working_days?: VacancyWorkingDays | IncludesNullableObject | (VacancyWorkingDays & IncludesNullableObject);
  working_time_intervals?:
    | VacancyWorkingTimeIntervals
    | IncludesNullableObject
    | (VacancyWorkingTimeIntervals & IncludesNullableObject);
  working_time_modes?:
    | VacancyWorkingTimeModes
    | IncludesNullableObject
    | (VacancyWorkingTimeModes & IncludesNullableObject);
}

/**
 * Регионы публикации вакансии
 * Список регионов
 */
export type VacancyDraftAreas = VacancyArea[] | null;

/**
 * Код вакансии
 * внутренний код вакансии
 * @minLength 1
 */
export type VacancyDraftCode = string | null;

/**
 * Профессиональные роли
 * список профессиональных ролей
 */
export type VacancyDraftProfessionalRoles = VacancyDraftProfessionalRoleItem[] | null;

/** Объект профессиональной роли */
export interface VacancyDraftProfessionalRoleItem {
  /**
   * Идентификатор профессиональной роли
   * @pattern ^\d+$
   */
  id?: string;
}

/**
 * Контакты
 * контактная информация
 */
export type VacancyDraftContacts = {
  /** email */
  email?: string | null;
  /** имя менеджера */
  name?: string | null;
  /** список телефонов для связи */
  phones?: VacancyDraftPhoneItem[] | null;
};

/** Объект телефона для связи */
export type VacancyDraftPhoneItem = VacancyDraftPhone | VacancyDraftPhoneFormatted;

export interface VacancyDraftPhone {
  /**
   * код города
   * @pattern ^\d+$
   */
  city: string;
  /** комментарий (удобное время для звонка по этому номеру) */
  comment?: string | null;
  /**
   * код страны
   * @pattern ^\d+$
   */
  country: string;
  /**
   * абонентская часть телефонного номера
   * @pattern ^\d+$
   */
  number: string;
}

export interface VacancyDraftPhoneFormatted {
  /** комментарий (удобное время для звонка по этому номеру) */
  comment?: string | null;
  /**
   * телефонный номер целиком
   * @pattern ^\d+$
   */
  formatted: string;
}

/**
 * Ключевые навыки
 * список ключевых навыков, не более 30
 */
export type VacancyDraftKeySkills = VacancyDraftKeySkillItem[] | null;

/** Объект ключевых навыков */
export type VacancyDraftKeySkillItem = {
  /**
   * название ключевого навыка
   * @minLength 1
   */
  name?: string;
} | null;

/**
 * Разместить на Зарплата.ру
 * Вашу вакансию увидят больше людей. Мы разместим ее дополнительно на сервисе Зарплата.ру
 */
export type VacancyDraftWithZp = boolean;

/**
 * Название
 * название
 * @minLength 1
 */
export type VacancyDraftName = string | null;

/**
 * Адрес
 * адрес
 */
export type VacancyDraftAddress = {
  /**
   * адрес из [списка доступных адресов работодателя](#tag/Adresa-rabotodatelya/operation/get-employer-addresses)
   * @pattern ^\d+$
   */
  id?: string | null;
  /** показывать только метро для указанного адреса */
  show_metro_only?: boolean | null;
};

/**
 * Брендированный шаблон
 * Предпочитаемый брендированный шаблон вакансий работодателя либо `null`, если не используется у компании.
 */
export interface VacancyDraftBrandedTemplate {
  /** Идентификатор брендированного шаблона вакансий */
  id: string;
}

/**
 * Описание
 * описание в html, минимум 1 символ, для успешной публикации вакансии не менее 200 символов
 * @minLength 1
 */
export type VacancyDraftDescription = string | null;

/** Тип занятости */
export type VacancyDraftEmployment = {
  /** тип занятости из [справочника employment](#tag/Obshie-spravochniki/operation/get-dictionaries). По умолчанию или ошибке в поле ставится full */
  id?: string | null;
};

/** Биллинговый тип */
export type VacancyDraftBillingType = {
  /** биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  id?: string;
} | null;

/** Тип */
export type VacancyDraftType = {
  /**
   * тип из [справочника vacancy_type](#tag/Obshie-spravochniki/operation/get-dictionaries)
   * @minLength 1
   */
  id?: string;
} | null;

/**
 * URL
 * URL отклика для прямых вакансий (`type.id=direct`)
 * @minLength 1
 */
export type VacancyDraftResponseUrl = string | null;

/**
 * Переданный формат не json
 * Информация о возникших ошибках
 */
export type ErrorsBadJsonErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadJsonError[];
};

/** Общая ошибка */
export interface ErrorsBadJsonError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_json_data"
   */
  type: "bad_json_data";
}

/**
 * Невалидный json
 * Информация о возникших ошибках
 */
export type ErrorsBadJsonDataErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadJsonDataError[];
};

/** Общая ошибка */
export interface ErrorsBadJsonDataError {
  /**
   * Описание ошибки
   * @example "Значение неправильное"
   */
  description?: string | null;
  /**
   * Путь до параметра, в котором возникла ошибка.
   *
   * Для указания параметра используется формат JsonPointer [RFC 6901](https://tools.ietf.org/html/rfc6901)
   * @example "/contacts/phones/1/number"
   */
  pointer?: string;
  /**
   * Причина ошибки. Возможные значения:
   *   * `required` - отсутствует обязательное поле
   *   * `invalid` - значение введено не корректно
   *   * `size_less_than_min` - пустой массив
   * @example "required"
   */
  reason?: "required" | "invalid" | "size_less_than_min";
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_json_data"
   */
  type: string;
  /**
   * Название поля с ошибкой
   * @example "employer_id"
   */
  value?: string;
}

/** Успешный ответ */
export type VacanciesVacanciesResponse = VacanciesVacanciesItems &
  IncludesPagination &
  VacanciesClusters &
  VacanciesArguments & {
    /** ссылка на вакансию */
    alternate_url?: string | null;
  };

export interface VacanciesVacanciesItems {
  /**
   * Список вакансий
   * @minItems 0
   */
  items: VacanciesVacanciesItem[];
}

/** Вакансия */
export type VacanciesVacanciesItem = VacanciesStandardVacancyFields & VacanciesAdditionalVacancyFields;

/** Вакансия */
export interface VacanciesAdditionalVacancyFields {
  counters?: VacancyCounters;
  /** Дополнительные текстовые снипеты (отрывки) по найденной вакансии. Если в тексте снипета встретилась поисковая фраза (параметр `text`), она будет подсвечена тегом `highlighttext` */
  snippet: VacancySnippet;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   *
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: VacancySortPointDistance;
}

/** Дополнительные текстовые отрывки */
export interface VacancySnippet {
  /** Отрывок из требований по вакансии, если они найдены в тексте описания */
  requirement?: string | null;
  /** Отрывок из обязанностей по вакансии, если они найдены в тексте описания */
  responsibility?: string | null;
}

/** Вакансия */
export interface VacanciesStandardVacancyFields {
  /** разрешен ли отклик на вакансию неполным резюме */
  accept_incomplete_resumes: VacancyAcceptIncompleteResumes;
  /** указание, что вакансия доступна с временным трудоустройством */
  accept_temporary?: VacancyAcceptTemporary;
  /** Адрес */
  address?: VacancyAddressRawOutput;
  /** URL для регистрации нажатия кнопки отклика */
  adv_response_url?: string | null;
  /** Ссылка на представление вакансии на сайте */
  alternate_url: string;
  /** Ссылка на отклик на вакансию на сайте */
  apply_alternate_url: string;
  /** Находится ли данная вакансия в архиве */
  archived?: boolean | null;
  area: IncludesArea;
  contacts?: IncludesNullableObject | VacancyContacts | null;
  /** Дата и время публикации вакансии */
  created_at?: string;
  department: VacancyDepartmentOutput | IncludesNullableObject | null;
  employer: VacanciesEmployerPublic;
  /** Информация о наличии прикрепленного тестового задании к вакансии */
  has_test: boolean;
  /** Идентификатор вакансии */
  id: string;
  /** Объект с информацией об интервью о жизни в компании */
  insider_interview?: VacancyInsiderInterview | IncludesNullableObject | null;
  metro_stations?: IncludesMetroStation;
  /** Название */
  name: VacancyName;
  /** Является ли данная вакансия премиум-вакансией */
  premium?: boolean | null;
  /** список профессиональных ролей */
  professional_roles: VacancyProfessionalRolesOutput;
  /** Дата и время публикации вакансии */
  published_at: string;
  /** Возвращает связи соискателя с вакансией. Значения из поля `vacancy_relation` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries). */
  relations: VacancyRelations;
  /** Обязательно ли заполнять сообщение при отклике на вакансию */
  response_letter_required: VacancyResponseLetterRequired;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: VacancyResponseUrl;
  /** Зарплата */
  salary: VacancySalary;
  schedule?: VacancyScheduleOutput | IncludesNullableObject | null;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   *
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: VacancySortPointDistance;
  type: VacancyTypeOutput;
  /** URL вакансии */
  url: string;
  /** список рабочих дней */
  working_days?: VacancyWorkingDaysOutput;
  /** список с временными интервалами работы */
  working_time_intervals?: VacancyWorkingTimeIntervalsOutput;
  /** список режимов времени работы */
  working_time_modes?: VacancyWorkingTimeModesOutput;
}

/** Кластеры в поиске вакансий */
export interface VacanciesClusters {
  /** Массив кластеров поиска */
  clusters?: VacanciesClusterItem[] | null;
}

/** Кластер */
export interface VacanciesClusterItem {
  /** Идентификатор кластера */
  id: string;
  /** Массив поисковых запросов в данном кластере с указанием дополнительных параметров */
  items: VacanciesItemsOfClusterItem[];
  /** Название типа кластера */
  name: string;
}

/** Поисковый запрос в кластере */
export interface VacanciesItemsOfClusterItem {
  /** Количество вакансий в данном элементе кластера */
  count: number;
  metro_line?: IncludesNullableObject | IncludesClusterMetroLine | null;
  metro_station?: IncludesNullableObject | IncludesClusterMetroStation | null;
  /** Название элемента кластера */
  name: string;
  /** Тип значения, связанного с группой */
  type?: "metro_station" | "metro_line" | null;
  /** Ссылка на поисковую выдачу по данному элементу кластера */
  url: string;
}

/** Линия метро */
export interface IncludesClusterMetroLine {
  /** Регион (город), в котором находится линия */
  area: object & IncludesArea;
  /** Цвет линии в HEX-формате `RRGGBB` (от `000000` до `FFFFFF`) */
  hex_color: string;
  /** Идентификатор линии */
  id: string;
}

/** Станция метро */
export interface IncludesClusterMetroStation {
  /** Регион, в котором находится станция */
  area: object & IncludesArea;
  /** Цвет линии в HEX-формате `RRGGBB` (от `000000` до `FFFFFF`) */
  hex_color: string;
  /** Идентификатор станции метро */
  id: string;
  /** Широта */
  lat: number;
  /** Долгота */
  lng: number;
  /** Порядковый номер станции в линии метро */
  order: number;
}

/** Использованные параметры в поиске вакансий */
export interface VacanciesArguments {
  /** Массив параметров поиска */
  arguments?: VacanciesArgumentItem[] | null;
}

/** Аргумент поиска */
export interface VacanciesArgumentItem {
  /** Параметр поиска вакансии */
  argument: string;
  /** Группа кластеров, которая связана с данным параметром */
  cluster_group?: object | (null & IncludesIdName);
  /** URL поиска вакансий, который получится, если перестать учитывать в поиске данный параметр */
  disable_url: string;
  /** Цвет линии в HEX-формате `RRGGBB` (от `000000` до `FFFFFF`) */
  hex_color?: string | null;
  /** Станция или линия метро (`station`/`line`) */
  metro_type?: string | null;
  /** Название значения */
  name?: string | null;
  /** Значение параметра */
  value: string;
  /** Описание параметра */
  value_description?: string;
}

export interface EmployerManagersEmployerManagerId {
  /** Идентификатор менеджера */
  id: string;
}

export interface MeSetInSearch {
  /**
   * Флаг «ищу работу». Возможные значения: `true`/`false`
   * @example "true"
   */
  is_in_search: string;
}

/** Список отраслей */
export type DictionariesIndustriesResponse = DictionariesBranchItem[];

/** Отрасль */
export interface DictionariesBranchItem {
  /** Идентификатор отрасли */
  id: string;
  /** Сферы деятельности */
  industries: IncludesIdName[];
  /** Название отрасли */
  name: string;
}

export interface ResumeShouldSendSmsContainer {
  /** Информация о телефоне */
  phone: ResumeShouldSendSmsPhone;
}

/** Информация о телефоне соискателя */
export interface ResumeShouldSendSmsPhone {
  /**
   * Префикс города номера телефона
   * @example "929"
   */
  city: string;
  /**
   * Префикс страны номера телефона
   * @example "7"
   */
  country: string;
  /**
   * Номер телефона отформатированный
   * @example "+7 (929) 667-21-67"
   */
  formatted: string;
  /**
   * Нужно ли верифицировать номер телефона
   * @example false
   */
  need_verification: boolean;
  /**
   * Номер телефона без префиксов
   * @example "6672167"
   */
  number: string;
  /**
   * Находится ли номер телефона в черном списке по отправке смс
   * @example false
   */
  restricted_country: boolean;
  /**
   * Верифицирован ли номер телефона пользователем
   * @example true
   */
  verified: boolean;
}

/** Ошибки */
export type ErrorsCombinationsResumeVisibilityErrorsBadRequest =
  | ErrorsBadRequestErrors
  | ErrorsBadArgumentResumeVisibilityErrors
  | (ErrorsBadRequestErrors & ErrorsBadArgumentResumeVisibilityErrors);

/**
 * Ошибка в теле запроса
 * Информация о возникших ошибках
 */
export type ErrorsBadRequestErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadRequestError[];
};

/** Общая ошибка */
export interface ErrorsBadRequestError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_request"
   */
  type: "bad_request";
}

/**
 * Oшибки
 * Информация о возникших ошибках
 */
export type ErrorsVacancyErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsVacancyError[];
};

/** Ошибка */
export interface ErrorsVacancyError {
  /** Количество найденных дублей вакансии */
  found?: number;
  /**
   * Массив идентификаторов вакансий-дублей
   * @minItems 1
   */
  items?: {
    /**
     * Идентификатор вакансии
     * @example 78789890
     */
    id: number;
  }[];
  /**
   * Причина ошибки
   * @example "is_empty"
   */
  reason?: string;
  /**
   * Тип ошибки
   * @example "bad_json_data"
   */
  type: string;
  /**
   * Наименование поля с ошибкой
   * @example "specializations"
   */
  value: string;
}

/** Объект подписки */
export interface WebhookSubscriptionUpdate {
  /**
   * Cписок событий, на которые нужно подписаться.
   * @minItems 1
   */
  actions?: (
    | WebhookActionNewNegotiationVacancy
    | WebhookActionNewResponseOrInvitationVacancy
    | WebhookActionVacancyArchivation
    | WebhookActionVacancyChange
    | WebhookActionVacancyProlongation
    | WebhookActionVacancyPublicationForVacancyManager
    | WebhookActionNegotiationEmployerStateChange
    | (WebhookActionNewNegotiationVacancy &
        WebhookActionNewResponseOrInvitationVacancy &
        WebhookActionVacancyArchivation &
        WebhookActionVacancyChange &
        WebhookActionVacancyProlongation &
        WebhookActionVacancyPublicationForVacancyManager &
        WebhookActionNegotiationEmployerStateChange)
  )[];
  /**
   * URL, на который будет отправляться POST запрос при наступлении события.
   * @format uri
   * @example "http://www.example.com"
   */
  url?: string;
}

/** Параметры для получения нового токена приложения */
export interface AuthClientCredentials {
  /**
   * Идентификатор, полученный при [создании приложения](https://dev.hh.ru/admin).
   * @minLength 1
   * @example "ETVQdMs2n9VKw7SMXkh9nX5H"
   */
  client_id: string;
  /**
   * Защищенный ключ, полученный при [создании приложения](https://dev.hh.ru/admin).
   * @minLength 1
   * @example "95dNjB8FmtxQsmygm6dtEy53"
   */
  client_secret: string;
  /**
   * Cпособ запроса токена
   * @example "client_credentials"
   */
  grant_type: "client_credentials";
}

export interface VacanciesVacancyProlongate {
  /** Список действий, которые можно предпринять для продления вакансии */
  actions: (VacanciesVacancyProlongateAvailableActions | VacanciesVacancyProlongateUnavailableActions)[];
  /** Дата окончания публикации вакансии */
  expires_at: string;
  /** Идентификатор вакансии */
  id: string;
}

/** Продление невозможно */
export interface VacanciesVacancyProlongateUnavailableActions {
  /** Причина, по которой совершить действие невозможно. Элемент `vacancy_not_prolonged_reason` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  disable_reason: object & IncludesIdName;
  /** Возможно ли выполнить действие */
  enabled: boolean;
  /** Идентификатор действия */
  id: string;
}

/** Продление возможно */
export interface VacanciesVacancyProlongateAvailableActions {
  /** Возможно ли выполнить действие */
  enabled: boolean;
  /** Идентификатор действия */
  id: string;
  /** HTTP-метод запроса для выполнения действия */
  method: string;
  /** URL запроса для выполнения действия */
  url: string;
}

export interface VacanciesVacancyStatsResponse {
  /**
   * Статистика за последние пять дней существования вакансии
   * @maxItems 5
   * @minItems 5
   */
  items: VacanciesVacancyStatsItem[];
}

/** Статистика по вакансии */
export interface VacanciesVacancyStatsItem {
  /** Дата в формате `YYYY-MM-DD` */
  date: string;
  /** Количество откликов на вакансию. `null` если дата в будущем или данных на эту дату нет */
  responses?: number | null;
  /** Количество просмотров вакансии. `null` если дата в будущем или данных на эту дату нет */
  views?: number | null;
}

/** Успешный ответ */
export type ApplicantCommentsApplicantCommentsList = ApplicantCommentsApplicantCommentItems & IncludesPagination;

export interface ApplicantCommentsApplicantCommentItems {
  /**
   * Список комментариев
   * @minItems 0
   */
  items: ApplicantCommentsApplicantCommentItem[];
}

/** Комментарий */
export interface ApplicantCommentsApplicantCommentItem {
  /** Тип доступа для комментария. Возможные значения перечислены [в справочнике](#tag/Obshie-spravochniki/operation/get-dictionaries) в поле `applicant_comment_access_type` */
  access_type: ApplicantCommentsAccessType & object;
  /** Автор комментария */
  author: ApplicantCommentsAuthor & object;
  /** Дата создания комментария */
  created_at: string;
  /** Уникальный идентификатор комментария */
  id: string;
  /** Комментарий написан текущим пользователем? */
  is_mine: boolean;
  /** Текст комментария. Может содержать символы новой строки */
  text: string;
}

/** Автор комментария */
export interface ApplicantCommentsAuthor {
  /** ФИО автора комментария */
  full_name: string;
}

/** Тип доступа */
export interface ApplicantCommentsAccessType {
  /** Идентификатор типа доступа */
  id: string;
  /** Название типа доступа */
  name: string;
}

/** Успешный ответ */
export type SavedSearchesSavedSearchResponse = SavedSearchesSavedSearchItems & IncludesPagination;

export interface SavedSearchesSavedSearchItems {
  /**
   * Список сохраненных поисков вакансий/резюме
   * @minItems 0
   */
  items: SavedSearchesSavedSearchItem[];
}

/** Список доступных локалей */
export type LocalesResponse = LocalesLocaleItem[];

/** Локаль */
export interface LocalesLocaleItem {
  /** `true` для текущей локали, `false` для остальных */
  current: boolean;
  /** Идентификатор локали */
  id: string;
  /** Имя локали */
  name: string;
}

/** Успешный ответ */
export interface EmployersVacancyBrandedTemplatesList {
  /** Список доступных брендированных шаблонов вакансий */
  items: {
    /**
     * Идентификатор брендированного шаблона вакансий
     * @minLength 1
     */
    id: string;
    /** Название брендированного шаблона вакансий */
    name: string;
    /**
     * Идентификатор активной версии брендированного шаблона.
     * Равен null в случае шаблонов-конструкторов и шаблонов-гибридов.
     */
    version_id: string | null;
  }[];
}

export interface VacancyDraftVacanciesDraftResponse {
  /**
   * @minItems 1
   * @example [30251619,30251620]
   */
  vacancy_ids?: number[];
}

/**
 * Подсказки по организациям
 * Подсказки по организациям
 */
export interface SuggestsCompanies {
  /**
   * Массив найденных организаций
   * Информация о найденных организациях
   */
  items: SuggestsCompanyItem[];
}

export type SuggestsCompanyItem = SuggestsEmployerItem & {
  area: SuggestsArea;
  /** Сферы деятельности */
  industries?: IncludesIdName[];
};

/** Регион */
export interface SuggestsArea {
  /** Идентификатор региона */
  id: string;
  /** Название региона */
  name: string;
}

export interface SuggestsEmployerItem {
  /** Идентификатор организации */
  id: string;
  /** Ссылка на логотип организации */
  logo_urls?: SuggestsLogoUrl;
  /** Название организации */
  text: string;
  /** Сайт организации */
  url?: string;
}

/** Ссылка на логотип */
export interface SuggestsLogoUrl {
  /** URL логотипа */
  "90": string;
}

/** Условия загрузки артефакта */
export interface ArtifactsArtifactConditions {
  /** Счетчик артефактов данного типа */
  counters: ArtifactsCounters & object;
  /** Условия для полей артефакта */
  fields: ArtifactsFields & object;
}

/** Счетчик артефактов данного типа */
export interface ArtifactsCounters {
  /** Максимально возможное количество артефактов данного типа, которое можно загрузить */
  max: number;
  /** Количество уже загруженных артефактов данного типа */
  uploaded: number;
}

/** Условия для полей артефакта */
export interface ArtifactsFields {
  /** Условия для поля `description` */
  description: ArtifactsDescription & object;
  /** Условия для поля `file` */
  file: ArtifactsFile & object;
  /** Условия для поля `type` */
  type: ArtifactsType & object;
}

/** Условия для поля `type` */
export interface ArtifactsType {
  /** Является ли поле `type` обязательным */
  required: boolean;
}

/** Условия для поля `description` */
export interface ArtifactsDescription {
  /** Максимальный размер текстового поля `description` */
  max_length: number;
  /** Минимальный размер текстового поля `description` */
  min_length: number;
  /** Является ли поле `description` обязательным */
  required: boolean;
}

/** Условия для поля `file` */
export interface ArtifactsFile {
  /** Максимальный размер файла */
  max_size: number;
  /** Список допустимых [MIME-типов](https://www.iana.org/assignments/media-types/media-types.xhtml) файлов */
  mime_type: string[];
  /** Является ли поле `file` обязательным */
  required: boolean;
}

/** Информация о менеджере */
export interface EmployerManagersEmployerManagerInfo {
  /** Дополнительный телефон менеджера */
  additional_phone?: EmployerManagersPhone & object;
  area?: EmployerManagersArea;
  /** Адрес электронной почты менеджера */
  email: string;
  /** Имя менеджера */
  first_name: string;
  /** Полное имя менеджера */
  full_name?: string;
  /** Идентификатор менеджера */
  id: string;
  /** Является ли менеджер основным контактным лицом */
  is_main_contact_person: boolean;
  /** Фамилия менеджера */
  last_name: string;
  manager_type?: EmployerManagersManagerType;
  /** Отчество менеджера */
  middle_name?: string;
  /**
   * Полное имя менеджера
   * @deprecated
   */
  name?: string;
  /** Список [прав менеджера](#tag/Menedzhery-rabotodatelya/operation/get-employer-manager-types) */
  permissions: EmployerManagerTypesAvailablePermissions[];
  /** Основной телефон менеджера */
  phone: EmployerManagersPhone & object;
  /** Должность менеджера */
  position: string;
  /** Количество опубликованных (активных) вакансий у данного менеджера. `null` — если у пользователя нет прав на просмотр вакансий этого менеджера */
  vacancies_count?: number | null;
}

/** Регион */
export interface EmployerManagersArea {
  /** Идентификатор региона из [справочника](https://github.com/hhru/api/blob/master/docs/areas.md) */
  id: string;
  /** Название региона */
  name: string;
  /** Ссылка на информацию о регионе */
  url: string;
}

/** Тип менеджера */
export interface EmployerManagersManagerType {
  /** Идентификатор типа менеджера */
  id: string;
  /** Название типа менеджера */
  name: string;
}

/** Параметры для получения токена пользователя */
export interface AuthCode {
  /**
   * Идентификатор, полученный при [создании приложения](https://dev.hh.ru/admin).
   * @minLength 1
   * @example "ETVQdMs2n9VKw7SMXkh9nX5H"
   */
  client_id: string;
  /**
   * Защищенный ключ, полученный при [создании приложения](https://dev.hh.ru/admin).
   * @minLength 1
   * @example "95dNjB8FmtxQsmygm6dtEy53"
   */
  client_secret: string;
  /**
   * Значение `authorization_code`, полученное при [перенаправлении пользователя](#get-authorization_code).
   * @minLength 1
   * @example "29CtxMcaA8pRFDYyC8e8Gkm4"
   */
  code: string;
  /**
   * Способ запроса токена
   * @example "authorization_code"
   */
  grant_type: "authorization_code";
  /**
   * Uri для перенаправления пользователя после авторизации. Если не указать, используется из настроек приложения. При наличии происходит валидация значения. Вероятнее всего, потребуется сделать urlencode значения параметра.
   * @minLength 1
   * @example "http://www.example.com/oauth"
   */
  redirect_uri: string;
}

/**
 * Не найдено.
 * Информация о возникших ошибках.
 */
export type ErrorsNotFoundEmployersBlacklistedErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок.
   * @minItems 1
   */
  errors: ErrorsNotFoundEmployersBlacklistedError[];
};

/** Ошибка. */
export interface ErrorsNotFoundEmployersBlacklistedError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "employers_blacklist"
   */
  type: "employers_blacklist";
  /**
   * Название поля с ошибкой. Возможные значения:
   * * `not_found` — работодатель для добавления в список не найден
   * @example "not_found"
   */
  value: "not_found";
}

/** Ошибка параметров запроса. */
export type ErrorsCombinationsAuthBadParameters =
  | AuthInvalidRequestError
  | AuthInvalidClientError
  | AuthInvalidGrantError
  | AuthUnsupportedGrantTypeError;

/** invalid_client */
export interface AuthInvalidClientError {
  /**
   * Идентификатор типа ошибки, используются значения, описанные в [документе RFC 6749](http://tools.ietf.org/html/rfc6749#section-5.2).
   * @example "invalid_client"
   */
  error: "invalid_client";
  /**
   * Дополнительное описание ошибки
   * * `client_id or client_secret not found` Ошибка может возникнуть в случае, если данный `client_id` не найден или был удален, передан неправильный `client_secret`
   * @example "client_id or client_secret not found"
   */
  error_description: "client_id or client_secret not found";
}

/** invalid_request */
export interface AuthInvalidRequestError {
  /**
   * Идентификатор типа ошибки, используются значения, описанные в [документе RFC 6749](http://tools.ietf.org/html/rfc6749#section-5.2).
   * @example "invalid_request"
   */
  error: "invalid_request";
  /**
   * Дополнительное описание ошибки
   * * `account not found` Ошибка может возникнуть, если передана неправильная пара `client_id` и `client_secret`
   * * `account is locked` Пользовательский аккаунт заблокирован. Пользователь должен обратиться в службу поддержки сайта
   * * `password invalidated` Пароль от пользовательского аккаунта устарел. Пользователь должен восстановить пароль на сайте `https://hh.ru`
   * * `login not verified` Пользовательский аккаунт не подтвержден. Пользователь должен обратиться в службу поддержки сайта
   * * `bad redirect url` передан неправильный `redirect_url`
   * * `token is empty` Не передан `refresh_token`
   * * `token not found` передан не правильный `refresh_token`
   * * `code not found ` переданный `authorization_code` не найден
   * @example "account not found"
   */
  error_description:
    | "account not found"
    | "account is locked"
    | "password invalidated"
    | "login not verified"
    | "bad redirect url"
    | "token is empty"
    | "token not found"
    | "code not found";
}

/** invalid_grant */
export interface AuthInvalidGrantError {
  /**
   * Идентификатор типа ошибки, используются значения, описанные в [документе RFC 6749](http://tools.ietf.org/html/rfc6749#section-5.2).
   * @example "invalid_grant"
   */
  error: "invalid_grant";
  /**
   * Дополнительное описание ошибки
   * * `token has already been refreshed` Ошибка возникает при попытке воспользоваться refresh-токеном второй раз
   * * `token not expired` Ошибка возникает при попытке обновить действующий access-токен. access-токен можно обновлять только после того, как он истек
   * * `token was revoked` Токен был отозван. Например, токен отзывается, если время действия пароля истекло
   * * `bad token ` Передано неправильное значение токена
   * * `code has already been used` `authorization_code` уже был использован (его можно использовать только один раз)
   * * `code expired` `authorization_code` истек
   * * `code was revoke` `authorization_code` был отозван (это происходит, если время действия пароля истекло)
   * * `token deactivated ` Токен был деактивирован. Токен деактивируется после того, как пользователь сменил пароль
   * @example "token not expired"
   */
  error_description:
    | "token has already been refreshed"
    | "token not expired"
    | "token was revoked"
    | "bad token"
    | "code has already been used"
    | "code expired"
    | "code was revoke"
    | "token deactivated";
}

/** unsupported_grant_type */
export interface AuthUnsupportedGrantTypeError {
  /**
   * Идентификатор типа ошибки, используются значения, описанные в [документе RFC 6749](http://tools.ietf.org/html/rfc6749#section-5.2).
   * @example "unsupported_grant_type"
   */
  error: "unsupported_grant_type";
  /**
   * Дополнительное описание ошибки
   * * `unsupported grant_type` Возникает, если передать неправильное значение в поле `grant_type`
   * @example "unsupported grant_type"
   */
  error_description: "unsupported grant_type";
}

/** Скрытые вакансии */
export type VacanciesVacanciesBlacklistedResponse = IncludesPagination & VacanciesVacanciesBlacklisted;

export interface VacanciesVacanciesBlacklisted {
  /** Массив скрытых вакансий */
  items?: VacanciesVacanciesBlacklistedItem[];
  /** Превышено ли максимальное количество элементов в списке */
  limit_reached?: boolean;
}

/** Скрытая вакансия */
export interface VacanciesVacanciesBlacklistedItem {
  /** адрес */
  address?: VacancyAddress;
  /** URL для регистрации нажатия кнопки отклика */
  adv_response_url: string;
  /** Ссылка на представление вакансии на сайте */
  alternate_url: string;
  /** Ссылка на отклик на вакансию на сайте */
  apply_alternate_url: string;
  /** Находится ли данная вакансия в архиве */
  archived: boolean;
  area: IncludesArea;
  /** Дата и время публикации вакансии */
  created_at?: string;
  department: VacancyDepartment;
  employer: VacanciesEmployerPublic;
  /** Информация о наличии прикрепленного тестового задании к вакансии */
  has_test: boolean;
  /** Идентификатор вакансии */
  id: string;
  insider_interview?: VacancyInsiderInterview | IncludesNullableObject | null;
  /** Название */
  name: VacancyName;
  /** Является ли данная вакансия премиум-вакансией */
  premium: boolean;
  /** Дата и время публикации вакансии */
  published_at: string;
  /** Возвращает связи соискателя с вакансией. Значения из поля `vacancy_relation` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries). */
  relations: VacancyRelations;
  /** Обязательно ли заполнять сообщение при отклике на вакансию */
  response_letter_required: VacancyResponseLetterRequired;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: VacancyResponseUrl;
  /** Зарплата */
  salary: VacancySalary;
  /**
   * Расстояние в метрах между центром сортировки (заданной параметрами `sort_point_lat`, `sort_point_lng`) и указанным в вакансии адресом. В случае, если в адресе указаны только станции метро, выдается расстояние между центром сортировки и средней геометрической точкой указанных станций.
   *
   * Значение `sort_point_distance` выдается только в случае, если заданы параметры `sort_point_lat`, `sort_point_lng`, `order_by=distance`
   */
  sort_point_distance?: VacancySortPointDistance;
  type: VacancyTypeOutput;
  /** URL вакансии */
  url: string;
}

export interface ArtifactsPortfolioDescription {
  /** Описание изображения */
  description: string;
}

/**
 * Подсказки по профессиональным ролям
 * Подсказки по профессиональным ролям
 */
export interface SuggestsProfessionalRoles {
  /**
   * Массив найденных профессиональных ролей
   * Информация о найденных профессиональных ролях
   */
  items: SuggestsProfessionalRoleItem[];
}

export interface SuggestsProfessionalRoleItem {
  /**
   * Профессиональная роль, для которой можно принимать отклики неполным резюме
   * @example true
   */
  accept_incomplete_resumes: boolean;
  /**
   * Идентификатор профессиональной роли
   * @example "21"
   */
  id: string;
  /**
   * Название профессиональной роли
   * @example "Водитель"
   */
  text: string;
}

/** Успешный ответ */
export interface EmployerManagerTypesResponse {
  /** Список типов и прав менеджера */
  items: EmployerManagerTypesEmployerManagerTypesItem[];
}

/** Тип и права менеджера */
export interface EmployerManagerTypesEmployerManagerTypesItem {
  /** Список прав, которые можно дать данному типу менеджера */
  available_permissions: EmployerManagerTypesAvailablePermissions[];
  /** Идентификатор типа менеджера */
  id: string;
  /** Название типа менеджера */
  name: string;
}

/** Параметры для обновление пары access и refresh токенов */
export interface AuthRefreshToken {
  /**
   * Cпособ запроса токена
   * @example "refresh_token"
   */
  grant_type: "refresh_token";
  /**
   * Refresh-токен, полученный ранее при [получении пары токенов](#section/Avtorizaciya/Obnovlenie-pary-access-i-refresh-tokenov) или прошлом обновлении пары.
   * @minLength 1
   * @example "xuLNvUSv7FYM4MPfXDP9aJWe"
   */
  refresh_token: string;
}

/** Вакансии в архиве */
export type VacanciesArchivedVacancyListResponse = IncludesPagination & VacanciesArchivedVacancyList;

export interface VacanciesArchivedVacancyList {
  /** Массив вакансий в архиве */
  items: VacanciesVacancyArchived[];
}

/** Ошибки */
export type ErrorsCombinationsArtifactUploadBadJsonData =
  | ErrorsBadJsonDataArtifactUploadErrors
  | ErrorsBadJsonDataErrors
  | (ErrorsBadJsonDataArtifactUploadErrors & ErrorsBadJsonDataErrors);

/**
 * Ошибка при загрузке артефакта
 * Информация о возникших ошибках
 */
export type ErrorsBadJsonDataArtifactUploadErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadJsonDataArtifactUploadError[];
};

/** Ошибка при загрузке артефакта */
export interface ErrorsBadJsonDataArtifactUploadError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "artifacts"
   */
  type: "artifacts";
  /**
   * Название поля с ошибкой. Возможные значения:
   * * `file` — не указан файл, либо указано несколько.
   * * `type` — некорректное значение параметра `type`.
   * * `description` — слишком длинное описание.
   * * `limit_exceeded` — превышено количество артефактов.
   * * `unknown_format` — неизвестный формат файла.
   * @example "limit_exceeded"
   */
  value: "file" | "type" | "description" | "limit_exceeded" | "unknown_format";
}

/** Информация о текущем авторизованном пользователе */
export type MeProfile = MeAnyProfile | MeApplicantProfile | MeEmployerProfile;

/**
 * Профиль работодателя
 * Профиль текущего пользователя, авторизованного как работодатель.
 */
export type MeEmployerProfile = MeAnyUserProfile & {
  /** Информация о компании работодателя */
  employer?: MeEmployerProfileCompany;
  /** @deprecated */
  is_in_search?: object | null;
  /** Информация о пользователе, как о менеджере компании. */
  manager?: MeEmployerProfileManager;
  /** @deprecated */
  negotiations_url?: object | null;
  /** Информация о персональном менеджере для работодателя */
  personal_manager?: MeEmployerProfilePersonalManager;
  /** @deprecated */
  resumes_url?: object | null;
  [key: string]: any;
};

/**
 * Базовый профиль
 * Базовый профиль текущего пользователя, авторизованного как соискатель или работодатель.
 */
export type MeAnyUserProfile = MeAnyProfile & {
  /**
   * Email текущего пользователя
   * @format email
   * @example "ivanov@example.com"
   */
  email?: string | null;
  /**
   * Имя текущего пользователя
   * @example "Александр"
   */
  first_name: string;
  /**
   * Идентификатор текущего пользователя
   * @example "12345678"
   */
  id: string;
  /** @deprecated */
  is_anonymous?: boolean;
  /**
   * Фамилия текущего пользователя
   * @example "Иванов"
   */
  last_name: string;
  /**
   * @deprecated
   * @example "Николаевич"
   */
  mid_name?: string;
  /**
   * Отчество текущего пользователя
   * @example "Петрович"
   */
  middle_name?: string | null;
  /**
   * Телефон текущего пользователя
   * @format phone
   * @example "79164555555"
   */
  phone?: string | null;
  [key: string]: any;
};

/**
 * Флаги профиля
 * Содержит флаги, актуальные для любого типа авторизации: соискатель, работодатель, приложение.
 */
export interface MeAnyProfile {
  /**
   * Тип авторизации
   * @example "applicant"
   */
  auth_type: string | null;
  /**
   * Является ли текущий пользователь администратором сайта
   * @example false
   */
  is_admin: boolean;
  /**
   * Является ли текущий пользователь соискателем
   * @example false
   */
  is_applicant: boolean;
  /**
   * Является ли авторизованный клиент приложением
   * @example false
   */
  is_application: boolean;
  /**
   * Является ли текущий пользователь работодателем
   * @example false
   */
  is_employer: boolean;
}

/**
 * Профиль соискателя
 * Профиль текущего пользователя, авторизованного как соискатель.
 */
export type MeApplicantProfile = MeAnyUserProfile & {
  /** Информация о счетчиках соискателя */
  counters: MeApplicantProfileCounters;
  /** @deprecated */
  employer?: object | null;
  /**
   * Имеет ли текущий пользователь статус "ищу работу"
   * @example false
   */
  is_in_search: boolean;
  /** @deprecated */
  manager?: object | null;
  /**
   * URL, на который нужно сделать GET-запрос, чтобы получить список откликов/приглашений текущего пользователя.
   * @format uri
   */
  negotiations_url: string;
  /** @deprecated */
  personal_manager?: object | null;
  /** Список видео профиля для текущего или запрашиваемого соискателя. */
  profile_videos?: ProfileVideosList;
  /**
   * URL, на который нужно сделать GET-запрос, чтобы получить список резюме текущего пользователя.
   * @format uri
   * @example "https://api.hh.ru/resumes/mine"
   */
  resumes_url: string;
  user_statuses?: UserStatusesApplicant;
  [key: string]: any;
};

/**
 * Счетчики соискателя
 * Информация о счетчиках соискателя
 */
export interface MeApplicantProfileCounters {
  /**
   * Общее количество новых просмотров всех резюме текущего пользователя.
   * @min 0
   * @example 2
   */
  new_resume_views: number;
  /**
   * Общее количество созданных резюме текущего пользователя.
   * @min 0
   * @example 5
   */
  resumes_count: number;
  /**
   * Количество новых непрочитанных откликов (у которых `has_updates: true`).
   * @min 0
   * @example 1
   */
  unread_negotiations: number;
}

/**
 * Список видео профиля
 * Список видео профиля для текущего или запрашиваемого соискателя.
 * @example {"$ref":"#/components/examples/ProfileVideosProfileVideosList/value"}
 */
export interface ProfileVideosList {
  items: {
    download_url: {
      /** Дата и время, до которых действительна ссылка */
      expires_at: string;
      /** Ссылка на скачивание видео */
      url: string;
    };
    /** Идентификатор видео */
    id: string;
  }[];
}

/** Пользовательский статусы соискателя */
export interface UserStatusesApplicant {
  job_search_status?: UserStatusesJobSearchStatus;
  when_can_start_work_status?: UserStatusesWhenCanStartWorkStatus;
}

/**
 * Статус "когда смогу выйти на работу" Deprecated
 * @deprecated
 */
export interface UserStatusesWhenCanStartWorkStatus {
  /**
   * Идентификатор статуса
   * @example "can_start_tomorrow"
   */
  id: string;
  /**
   * Название статуса
   * @example "Готов выйти завтра"
   */
  name: string;
}

/** Статус поиска работы соискателем */
export interface UserStatusesJobSearchStatus {
  /**
   * Детальное описание статуса
   * @deprecated
   * @example "Откликаюсь, прохожу собеседования"
   */
  description?: string;
  /**
   * Идентификатор статуса
   * @example "active_search"
   */
  id: string;
  /**
   * Название статуса
   * @example "В активном поиске работы"
   */
  name: string;
}

/**
 * Персональный менеджер для работодателя
 * Информация о персональном менеджере для работодателя
 */
export interface MeEmployerProfilePersonalManager {
  /**
   * email персонального менеджера
   * @format email
   * @example "smirnov@example.com"
   */
  email: string;
  /**
   * Имя персонального менеджера
   * @example "Николай"
   */
  first_name: string;
  /**
   * Идентификатор персонального менеджера
   * @example "1234567"
   */
  id: string;
  /**
   * Доступен ли менеджер в данный момент
   * @example false
   */
  is_available: boolean;
  /**
   * Фамилия персонального менеджера
   * @example "Смирнов"
   */
  last_name: string;
  /** Объект с фотографиями менеджера */
  photo_urls?: {
    /**
     * URL большой фотографии менеджера
     * @format uri
     * @example "https://hhcdn.ru/file/big.jpg"
     */
    big?: string | null;
    /**
     * URL маленькой фотографии менеджера
     * @format uri
     * @example "https://hhcdn.ru/file/small.jpg"
     */
    small?: string | null;
  };
  /** Информация об отсутствии менеджера, либо `null`, если менеджер доступен. */
  unavailable?: {
    /**
     * Время, до которого менеджер недоступен для контакта
     * @format dateTime
     * @example "2016-07-01T08:00:00+0400"
     */
    until?: string;
  } | null;
}

/**
 * Компания работодателя
 * Информация о компании работодателя
 */
export interface MeEmployerProfileCompany {
  /**
   * Идентификатор компании
   * @example "1455"
   */
  id: string;
  /**
   * Идентификатор персонального менеджера
   * @example "4062820"
   */
  manager_id: string;
  /**
   * Название компании
   * @example "HeadHunter"
   */
  name: string;
}

/**
 * Информация о менеджере компании
 * Информация о пользователе, как о менеджере компании.
 */
export interface MeEmployerProfileManager {
  /**
   * Обладает ли текущий менеджер правами администратора
   * @example true
   */
  has_admin_rights: boolean;
  /**
   * Существует ли у пользователя несколько [рабочих аккаунтов](#tag/Menedzhery-rabotodatelya/operation/get-manager-accounts)
   * @example true
   */
  has_multiple_manager_accounts: boolean;
  /**
   * Идентификатор менеджера
   * @example "87654321"
   */
  id: string;
  /**
   * Является ли текущий менеджер главным контактным лицом компании
   * @example true
   */
  is_main_contact_person: boolean;
  /**
   * URL, на который нужно сделать GET запрос, чтобы получить [предпочтения менеджера](tag/Menedzhery-rabotodatelya/paths/~1employers~1{employer_id}~1managers~1{manager_id}~1settings/get)
   * @format uri
   * @example "https://api.hh.ru/employers/1455/managers/87654321/settings"
   */
  manager_settings_url: string;
}

/**
 * В запросе передана слишком большая сущность
 * Информация о возникших ошибках
 */
export type ErrorsRequestEntityTooLargeErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsRequestEntityTooLargeError[];
};

/** Слишком большой файл */
export interface ErrorsRequestEntityTooLargeError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "artifacts"
   */
  type: "artifacts";
  /**
   * Краткое текстовое описание причины ошибки
   * @example "image_too_large"
   */
  value: "image_too_large";
}

/**
 * Не найдено.
 * Информация о возникших ошибках.
 */
export type ErrorsNotFoundErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок.
   * @minItems 1
   */
  errors: ErrorsNotFoundError[];
};

/** Ошибка. */
export interface ErrorsNotFoundError {
  /**
   * Текстовый идентификатор типа ошибки.
   * @example "not_found"
   */
  type: "not_found";
}

/**
 * Список доступных пользовательских статусов для соискателя
 * @example {"job_search_statuses":[{"allowed_when_can_start_work_statuses":["tomorrow","in_two_weeks","more_than_two_weeks"],"description":"Откликаюсь, прохожу собеседования, готов выйти в ближайшее время","id":"active_search","name":"В активном поиске работы"},{"allowed_when_can_start_work_statuses":["tomorrow","in_two_weeks","more_than_two_weeks"],"description":"Хочу получать только подборки вакансий, рассматриваю избранные предложения","id":"looking_for_offers","name":"Хочу рассмотреть предложения"},{"allowed_when_can_start_work_statuses":[],"description":"В данный момент не заинтересован в новых предложениях","id":"not_looking_for_job","name":"Пока не ищу работу"}],"job_search_statuses_applicant":[{"id":"active_search","name":"В активном поиске работы"},{"id":"looking_for_offers","name":"Хочу рассмотреть предложения"},{"id":"not_looking_for_job","name":"Пока не ищу работу"}],"job_search_statuses_employer":[{"id":"active_search","name":"Активно ищет работу"},{"id":"looking_for_offers","name":"Рассматривает предложения"},{"id":"not_looking_for_job","name":"Не ищет работу"}],"when_can_start_work_statuses":[{"id":"tomorrow","name":"Готов выйти завтра"},{"id":"in_two_weeks","name":"В течение двух недель"},{"id":"more_than_two_weeks","name":"Через 2 недели и более"}]}
 */
export interface UserStatusesAvailable {
  job_search_statuses?: UserStatusesJobSearchStatusDictionary[];
  job_search_statuses_applicant: IncludesIdName[];
  job_search_statuses_employer: IncludesIdName[];
  when_can_start_work_statuses?: UserStatusesWhenCanStartWorkStatus[];
}

/** Статус поиска работы соискателем */
export type UserStatusesJobSearchStatusDictionary = UserStatusesJobSearchStatus & {
  /** Массив с доступными для выбора `when_can_start_work_status` */
  allowed_when_can_start_work_statuses: string[];
};

/** Список работодателей, для которых резюме должно быть видимо или скрыто */
export type ResumesGetResumeVisibilityListResponse = IncludesPagination & ResumesGetResumeVisibilityListProperties;

export interface ResumesGetResumeVisibilityListProperties {
  /** Список работодателей */
  items: ResumesGetResumeVisibilityListItem[];
  /** Максимальное количество элементов в списке */
  limit: number;
}

/**
 * Ошибка добавления работодателя в скрытые
 * Информация о возникших ошибках
 */
export type ErrorsBadArgumentEmployerBlacklistErrors = ErrorsErrorRequestId & {
  /** Описание ошибки */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadArgumentEmployerBlacklistError[];
};

/** Ошибка в параметре запроса */
export interface ErrorsBadArgumentEmployerBlacklistError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "employers_blacklist"
   */
  type: "employers_blacklist";
  /**
   * Название поля с ошибкой:
   * * `limit_exceeded` — превышен лимит на количество работодателей в списке скрытых
   * @example "limit_exceeded"
   */
  value?: "limit_exceeded";
}

/** Объект черновика вакансии */
export type VacancyDraftVacancyDraftFull = VacancyDraftCommon & {
  address: VacancyDraftAddressOutput;
  /**
   * Коды и названия регионов (фед. округа, субъекты федерации, города)
   * @minItems 1
   */
  areas: VacancyAreaOutput[];
  /** Предпочитаемый брендированный шаблон вакансий работодателя либо `null`, если не используется у компании. */
  branded_template?: VacancyBrandedTemplate;
  /** контактная информация */
  contacts: VacancyDraftContactsWithFullPhone;
  /** название компании для анонимных вакансий (`type.id=anonymous`), например "крупный российский банк". Если не передать, проставится автоматом пустая строка. */
  custom_employer_name?: VacancyCustomEmployerName;
  employer: VacancyDraftEmployer;
  meta_info: VacancyDraftVacancyDraftBase;
  /** Вашу вакансию увидят больше людей. Мы разместим ее дополнительно на сервисе Зарплата.ру */
  with_zp: VacancyDraftWithZp;
};

/** Работодатель */
export interface VacancyDraftEmployer {
  /** Url для просмотра работодателя на сайте */
  alternate_url: string;
  /** Идентификатор работодателя */
  id: string;
  /** Ссылки на логотипы работодателя разных размеров */
  logo_urls: {
    "90": string;
    "240": string;
    original?: string;
  };
  /** Название работодателя */
  name: string;
  /** Url для просмотра работодателя */
  url: string;
}

export interface VacancyDraftCommon {
  /** Указание, что вакансия доступна для соискателей с инвалидностью */
  accept_handicapped: VacancyAcceptHandicapped;
  /** разрешен ли отклик на вакансию неполным резюме */
  accept_incomplete_resumes: VacancyAcceptIncompleteResumes;
  /** Указание, что вакансия доступна для соискателей старше 14 лет [подробнее](https://github.com/hhru/api/blob/master/docs/employer_vacancies_accept_kids.md#accept-kids) */
  accept_kids: VacancyAcceptKids;
  /** указание, что вакансия доступна с временным трудоустройством */
  accept_temporary?: VacancyAcceptTemporary;
  /** возможность [переписки с кандидатами](https://inboxemp.hh.ru/) по данной вакансии */
  allow_messages: VacancyAllowMessages;
  /** Биллинговый тип [из справочника vacancy_billing_type](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  billing_type: VacancyBillingTypeOutput;
  /** внутренний код вакансии */
  code?: VacancyCode;
  department?: VacancyDepartmentOutput;
  /** описание в html, не менее 200 символов */
  description: VacancyDescription;
  /** список требуемых категорий водительских прав */
  driver_license_types: VacancyDriverLicenseTypes;
  employment?: VacancyEmploymentOutput;
  experience: VacancyExperienceOutput;
  /** Информация о наличии прикрепленного тестового задании к вакансии */
  has_test: boolean;
  /** Список ключевых навыков, не более 30 */
  key_skills: VacancyKeySkills;
  /** список языков вакансии */
  languages: VacancyLanguagesOutput;
  manager: VacancyManager;
  /** Название */
  name: VacancyName;
  /** список профессиональных ролей */
  professional_roles: VacancyProfessionalRolesOutput;
  /** Обязательно ли заполнять сообщение при отклике на вакансию */
  response_letter_required: VacancyResponseLetterRequired;
  /** Уведомлять ли менеджера о новых откликах */
  response_notifications: VacancyResponseNotifications;
  /** URL отклика для прямых вакансий (`type.id=direct`) */
  response_url?: VacancyResponseUrl;
  /** Зарплата */
  salary?: VacancySalary;
  schedule: VacancyScheduleOutput;
  /** объект - [тест](#tag/Spravochniki-rabotodatelya/operation/get-tests-dictionary) для вакансии */
  test?: VacancyDraftTest;
  type: VacancyTypeOutput;
  /** список рабочих дней */
  working_days?: VacancyWorkingDaysOutput;
  /** список с временными интервалами работы */
  working_time_intervals?: VacancyWorkingTimeIntervalsOutput;
  /** список режимов времени работы */
  working_time_modes?: VacancyWorkingTimeModesOutput;
}

/** Адрес */
export type VacancyDraftAddressOutput = VacancyAddressOutput & VacancyAddress;

/**
 * Контакты
 * контактная информация
 */
export interface VacancyDraftContactsWithFullPhone {
  /** email */
  email: string | null;
  /** имя менеджера */
  name: string | null;
  /** список телефонов для связи */
  phones: VacancyDraftPhoneItemWithFullPhone[] | null;
}

/** Объект телефона для связи */
export interface VacancyDraftPhoneItemWithFullPhone {
  /** комментарий (удобное время для звонка по этому номеру) */
  comment?: string | null;
  /**
   * телефонный номер
   * @pattern ^\d+$
   */
  formatted?: string;
}

/** Успешный ответ */
export type EmployersEmployerVacancyAreasResponse = EmployersEmployerVacancyAreasItems & IncludesPagination;

export interface EmployersEmployerVacancyAreasItems {
  /**
   * Список регионов
   * @minItems 0
   */
  items: IncludesArea[];
}

/** Успешный ответ */
export type VacanciesVisitorsResponse = VacanciesVisitorsVisitorItems &
  IncludesPagination &
  VacanciesVisitorsHiddenOnPage;

export interface VacanciesVisitorsHiddenOnPage {
  /** Количество удаленных или скрытых соискателями резюме на странице */
  hidden_on_page: number;
}

export interface VacanciesVisitorsVisitorItems {
  /**
   * Список сокращенных представлений резюме
   * @minItems 0
   */
  items: ResumeResumeShort[];
}

/** Сокращенное представление резюме */
export interface ResumeResumeShort {
  /** Дополнительные действия */
  actions: ResumeObjectsActions;
  /** Возраст */
  age?: number | null;
  /** URL резюме на сайте */
  alternate_url: string;
  /** Город проживания. Элемент справочника [areas](https://github.com/hhru/api/blob/master/docs/areas.md) */
  area?: IncludesIdNameUrl | IncludesNullableObject | null;
  /** Доступен ли просмотр контактной информации в резюме текущему работодателю */
  can_view_full_info?: boolean | null;
  /**
   * Список сертификатов соискателя
   * @minItems 0
   */
  certificate: ResumeObjectsCertificate[];
  /** Дата и время создания резюме */
  created_at: string;
  /** Ссылки для скачивания резюме в разных форматах */
  download: ResumeObjectsDownload;
  /**
   * Образование соискателя.
   *
   * Особенности сохранения образования:
   *
   * * Если передать и высшее и среднее образование и уровень образования "средний", то сохранится только среднее образование.
   * * Если передать и высшее и среднее образование и уровень образования "высшее", то сохранится только высшее образование
   */
  education: ResumeObjectsEducation;
  /**
   * Опыт работы
   * @minItems 0
   */
  experience: ResumeObjectsExperience[];
  /** Добавлено ли резюме в избранные */
  favorited: boolean;
  /** Имя */
  first_name?: string | null;
  /** Пол соискателя. Возможные значения перечислены в поле `gender` [справочника полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  gender?: IncludesIdName | IncludesNullableObject | null;
  /**
   * [Список скрытых полей](https://github.com/hhru/api/blob/master/docs/employer_resumes.md#hidden-fields). Возможные значения элементов приведены в поле `resume_hidden_fields` [справочника полей](#tag/Obshie-spravochniki/operation/get-dictionaries)
   * @minItems 0
   */
  hidden_fields: IncludesIdName[];
  /** Идентификатор резюме */
  id: string;
  /** Фамилия */
  last_name?: string | null;
  /** Выделено ли резюме в поиске */
  marked: boolean;
  /** Отчество */
  middle_name?: string | null;
  /** Краткая история откликов/приглашений по резюме */
  negotiations_history: ResumeObjectsNegotiationsHistoryUrl;
  /** Информация о владельце резюме */
  owner: ResumeObjectsOwner;
  /** Фотография пользователя */
  photo?: ResumeObjectsPhoto | IncludesNullableObject | null;
  /** Ресурс, на котором было размещено резюме */
  platform?: IncludesId;
  /** Желаемая зарплата */
  salary?: ResumeObjectsSalary | IncludesNullableObject | null;
  /** Желаемая должность */
  title?: string | null;
  /** Общий опыт работы */
  total_experience?: ResumeObjectsTotalExperience | IncludesNullableObject | null;
  /** Дата и время обновления резюме */
  updated_at: string;
  /** URL резюме на сайте */
  url: string;
  /** Было ли резюме уже просмотрено работодателем */
  viewed: boolean;
}

/** Сертификат */
export interface ResumeObjectsCertificate {
  /** Дата получения (в формате `ГГГГ-ММ-ДД`) */
  achieved_at: string;
  /** На кого выдан сертификат. Возвращается только для сертификатов с `type = microsoft` */
  owner?: string | null;
  /** Название сертификата */
  title: string;
  /**
   * Тип сертификата. Доступные значения:
   *
   * * `custom`;
   * * `microsoft`
   */
  type: string;
  /** Ссылка на страницу с описанием сертификата */
  url?: string | null;
}

/** Фотография */
export interface ResumeObjectsPhoto {
  /** Уникальный идентификатор изображения */
  id: string;
  /** URL среднего по размеру изображения. Изображение по данному URL доступно ограниченное время после получения ответа. Приложение должно быть готово к тому, что на запрос изображения вернется ошибка `404 Not Found` */
  medium: string;
  /** URL уменьшенного изображения. Изображение по данному URL доступно ограниченное время после получения ответа. Приложение должно быть готово к тому, что на запрос изображения вернется ошибка `404 Not Found` */
  small: string;
}

/** Загрузка резюме */
export interface ResumeObjectsDownload {
  /** PDF-версия резюме */
  pdf: ResumeObjectsDownloadPdfRtf;
  /** RTF-версия резюме */
  rtf: ResumeObjectsDownloadPdfRtf;
}

/** PDF/RTF-версия резюме */
export interface ResumeObjectsDownloadPdfRtf {
  /** Ссылка для получения PDF/RTF-версии резюме */
  url: string;
}

/** Зарплата */
export interface ResumeObjectsSalary {
  /** Сумма */
  amount: number;
  /** Идентификатор валюты. Возможные значения перечислены в массиве `currency` [справочника полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  currency: string;
}

/** Опыт работы */
export interface ResumeObjectsTotalExperience {
  /** Общий опыт работы в месяцах, с округлением до месяца */
  months: number;
}

/** Опыт работы в организации */
export interface ResumeObjectsExperience {
  /** Регион расположения организации. Элемент [справочника регионов](https://github.com/hhru/api/blob/7bf12638f5846e8e8ee819dceaff0fdee0e439e0/docs/areas.md). */
  area?: IncludesIdNameUrl | IncludesNullableObject | null;
  /** Название организации */
  company?: string | null;
  /** Уникальный идентификатор организации */
  company_id?: string | null;
  /** Сайт компании */
  company_url?: string | null;
  /** Обязанности, функции, достижения */
  description?: string | null;
  /** Работодатель */
  employer?: EmployersEmployerInfo | IncludesNullableObject | null;
  /** Окончание работы (дата в формате `ГГГГ-ММ-ДД`) */
  end?: string | null;
  /** Список отраслей компании. Возможные значения приведены в [справочнике индустрий](#tag/Obshie-spravochniki/operation/get-industries) */
  industries: IncludesIdName[];
  /** Отрасль компании */
  industry?: ResumeObjectsIndustry | IncludesNullableObject | null;
  /** Должность */
  position: string;
  /** Начало работы (дата в формате `ГГГГ-ММ-ДД`) */
  start: string;
}

/** Работодатель */
export interface EmployersEmployerInfo {
  /** Ссылка на описание работодателя на сайте */
  alternate_url: string;
  /** Информация о подключенных услугах соискателя, относящихся к данному работодателю */
  applicant_services?: IncludesEmployerApplicantServices;
  /** Информация о регионе работодателя */
  area: IncludesArea & object;
  /**
   * Строка с кодом HTML (возможно наличие `<script/>` и `<style/>`), которая является альтернативой стандартному описанию работодателя. HTML адаптирован для мобильных устройств и корректно отображается без поддержки Javascript.
   *
   * При этом:
   *
   * - Контент тянется по ширине на 100% ширины контейнера и умещается без прокрутки в 300px.
   * - Контент рассчитан на то, что он будет вставлен в обвязку, в которую входит название, логотип, сайт и ссылка на вакансии работодателя.
   * - Изображения, которые могут встретиться в таком описании, адаптированы под retina-дисплеи.
   * - Размер шрифта не меньше 12px, размер межстрочного интервала не меньше 16px.
   *
   * Значение может быть `null`, если у работодателя отсутствует индивидуальное описание
   */
  branded_description?: string | null;
  /** Значение может быть `null`, если у работодателя отсутствует брендирование страницы */
  branding?: IncludesNullableObject | EmployersBrandingConstructor | EmployersBrandingMakeup | null;
  /** Описание работодателя в виде строки с кодом HTML (без `<script/>` и `<style/>`) */
  description?: string | null;
  /** Идентификатор работодателя */
  id: string;
  /** Список отраслей работодателя. Элементы [справочника индустрий](https://api.hh.ru/openapi/redoc#tag/Obshie-spravochniki/operation/get-industries) */
  industries: IncludesIdName[];
  /**
   * Список интервью
   * @minItems 0
   */
  insider_interviews: EmployersInsiderInterviews[];
  /** Ссылки на изображения логотипов работодателя разных размеров. `original` — это необработанный логотип, который может быть большого размера. Если изначально загруженный компанией логотип меньше, чем 240px и/или 90px по меньшей стороне, то в соответствующих ключах будут ссылки на изображения оригинального размера. Объект может быть `null`, если компания не загрузила логотип. Клиент должен предусмотреть возможность отсутствия логотипа по указанной ссылке (ответ с кодом `404 Not Found`). Если информация о работодателе используется для описания вакансии, у которой есть брендированный логотип, все ссылки ведут на него. */
  logo_urls?: IncludesLogoUrls | IncludesNullableObject | null;
  /** Название работодателя */
  name: string;
  /** Количество открытых вакансий у работодателя */
  open_vacancies: number;
  /** Если работодатель добавлен в черный список, то вернется `['blacklisted']`, иначе `[]` */
  relations: ("blacklisted" | null)[];
  /** Адрес сайта работодателя */
  site_url: string;
  /** Флаг, показывающий, прошел ли работодатель [проверку на сайте](https://feedback.hh.ru/article/details/id/5951) */
  trusted: boolean;
  /** Тип работодателя (прямой работодатель, кадровое агентство и т.п.). Возможные значения описаны в [справочнике](#tag/Obshie-spravochniki/operation/get-dictionaries) в поле `employer_type`. Возвращает `null`, если тип работодателя скрыт */
  type?: string | null;
  /** URL для получения поисковой выдачи с вакансиями данного работодателя */
  vacancies_url: string;
}

/** Полностью кастомный вид бренд страниц */
export interface EmployersBrandingMakeup {
  /**
   * Уникальный код активного бренд шаблона страницы в формате "makeup:\d+"
   * @example "makeup:123"
   */
  template_code: string;
  /** Идентификатор активной версии бренд шаблона страницы */
  template_version_id: string;
  type: "makeup";
}

/** Бренд страница сделанная с помощью конструктора бренд страниц */
export interface EmployersBrandingConstructor {
  type: "constructor";
  /** Ссылка на webview версию бренд страницы */
  url: string;
  /** Список виджетов на странице */
  widgets: EmployersBrandingConstructorGalleryWidget[];
}

/** Виджет галереи */
export interface EmployersBrandingConstructorGalleryWidget {
  /** Список изображений в галерее */
  items?: {
    /** Идентификатор изображения */
    picture_id: number;
    /** Путь к изображению на cdn хранилище */
    resized_path: string;
  }[];
  type?: "gallery";
}

/** Интервью */
export interface EmployersInsiderInterviews {
  /** Идентификатор интервью */
  id: string;
  /** Заголовок интервью */
  title: string;
  /** Адрес страницы, содержащей интервью */
  url: string;
}

/** Объект с идентификатором, названием и ссылкой */
export type IncludesIdNameUrl = IncludesIdName & {
  /** URL получения информации о поле */
  url: string;
};

/**
 * Отрасль
 * @deprecated
 */
export interface ResumeObjectsIndustry {
  /** Идентификатор поля */
  id: string;
  /** Название поля */
  name: string;
}

/** Владелец резюме */
export interface ResumeObjectsOwner {
  /** [Комментарии к владельцу резюме](#tag/Kommentarii-k-soiskatelyu/operation/get-applicant-comments-list) */
  comments: ResumeObjectsOwnerComments;
  /** Идентификатор владельца резюме */
  id: string;
}

/** Комментарии о владельце резюме */
export interface ResumeObjectsOwnerComments {
  /** Информация о количестве комментариев */
  counters: ResumeObjectsOwnerCommentsCounters;
  /** URL, на который нужно сделать GET-запрос, чтобы получить список комментариев */
  url: string;
}

/** Количество комментариев */
export interface ResumeObjectsOwnerCommentsCounters {
  /** Общее количество комментариев */
  total: number;
}

export interface ResumeObjectsActions {
  /** Ссылки для скачивания резюме в нескольких форматах ([подробнее](https://github.com/hhru/api/blob/master/docs/resumes.md#download-links)) */
  download: ResumeObjectsDownload;
  /** Ссылки для скачивания резюме с контактами (происходит трата услуги) в нескольких форматах ([подробнее](https://github.com/hhru/api/blob/master/docs/employer_resumes.md#download-links)). */
  download_with_contact?: ResumeObjectsDownload | IncludesNullableObject | null;
  /** Ссылка для получения резюме с контактами (происходит трата услуги). По ссылке возвращается объект аналогичный [просмотру резюме](https://github.com/hhru/api/blob/master/docs/employer_resumes.md#item) */
  get_with_contact?: IncludesUrl | IncludesNullableObject | null;
}

export interface IncludesUrl {
  /** Ссылка на получение элементов */
  url: string;
}

/** Образование */
export interface ResumeObjectsEducation {
  /** Список куров повышения квалификации */
  additional?: ResumeObjectsEducationAdditional[] | null;
  /** Список пройденных тестов или экзаменов */
  attestation?: ResumeObjectsEducationAdditional[] | null;
  /** Среднее образование. Обычно заполняется только при отсутствии высшего образования */
  elementary?: ResumeObjectsEducationElementary[] | null;
  /** Уровень образования. Возможные значения приведены в поле `education_level` [справочника полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  level: object;
  /** Список образований выше среднего */
  primary?: ResumeObjectsEducationPrimary[] | null;
}

/** Высшее образование */
export interface ResumeObjectsEducationPrimary {
  /** Название учебного заведения */
  name: string;
  /** Идентификатор учебного заведения */
  name_id?: string | null;
  /** Факультет */
  organization?: string | null;
  /** Идентификатор факультета */
  organization_id?: string | null;
  /** Специальность / специализация */
  result?: string | null;
  /** Идентификатор специальности / специализации */
  result_id?: string | null;
  /** Год окончания */
  year: number;
}

/** Дополнительное образование */
export interface ResumeObjectsEducationAdditional {
  /** Название курса / теста */
  name: string;
  /** Организация, проводившая курс / тест */
  organization: string;
  /** Специальность / специализация */
  result?: string | null;
  /** Год окончания / сдачи */
  year: number;
}

/** Среднее образование */
export interface ResumeObjectsEducationElementary {
  /** Название учебного заведения */
  name: string;
  /** Год окончания */
  year: number;
}

/** История откликов/приглашений */
export interface ResumeObjectsNegotiationsHistoryUrl {
  /** URL, на который необходимо сделать GET-запрос, чтобы получить [подробную историю откликов/приглашений](#tag/Otklikipriglasheniya-rabotodatelya/operation/get-resume-negotiations-history) по данному резюме */
  url: string;
}

/** Ошибка параметров запроса */
export type WebhookBadDataError = ErrorsBadJsonDataErrors | WebhookErrors;

/**
 * Бизнес ошибки
 * Информация о возникших ошибках
 */
export type WebhookErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: WebhookError[];
};

/** Ошибка */
export interface WebhookError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "notifications"
   */
  type: string;
  /**
   * Описание ошибки:
   *   * already_exist - У текущего пользователя/компании уже есть подписка для данного приложения (включая подписку на резюме)
   * @example "already_exist"
   */
  value: "already_exist";
}

export type VacancyDraftDraftResponseSchema = Id & {
  /** Поля, которые не были сохранены при создании черновика, вследствие не верного заполнения */
  ignored_fields?: string[];
  /** Заголовок черновика */
  name: string;
  /** Готовность черновика к публикации */
  publication_ready: boolean;
  /** Поля, которые были сохранены при создании черновика, с соответствующими ошибками, которые необходимо поправить для успешной публикации вакансии на основе черновика */
  validation_errors?: VacancyDraftDraftVacancyError[];
};

/** Ошибка */
export interface VacancyDraftDraftVacancyError {
  /** Причина ошибки */
  reason?: string;
  /** Название поля, в котором допущена ошибка */
  value: string;
}

/** Информация о созданном объекте */
export interface Id {
  /**
   * Идентификатор созданного объекта
   * @example "22"
   */
  id: string;
}

/** Ошибка. */
export interface ErrorsDraftError {
  /**
   * Текстовый идентификатор типа ошибки.
   * @example "vacancy"
   */
  type: "vacancy";
  /**
   * Значение ошибки
   * @example "vacancy_draft_limit_exceeded"
   */
  value: "vacancy_draft_limit_exceeded";
}

/** Изображение */
export interface ArtifactsArtifactItem {
  /** Идентификатор изображения */
  id: string;
  /** URL для получения среднего по размеру изображения или `null`, если изображение ещё не готово */
  medium?: string | null;
  /** URL для получения уменьшенного изображения или `null`, если изображение ещё не готово */
  small?: string | null;
  /** Текущий статус изображения */
  state: ArtifactsState;
}

/** Статус изображения */
export interface ArtifactsState {
  /**
   * Идентификатор текущего статуса изображения:
   *
   * - `processing` — в процессе обработки;
   * - `failed` — ошибка, скорее всего неподдерживаемый формат;
   * - `ok` — обработан, доступен для использования в резюме
   */
  id: "processing" | "failed" | "ok";
  /** Название текущего статуса изображения */
  name: string;
}

/**
 * Предпочтения менеджера
 * Информация о предпочтениях менеджера
 */
export interface ManagerSettings {
  /** Предпочитаемая валюта при [публикации вакансии](#tag/Upravlenie-vakansiyami/operation/publish-vacancy). */
  default_currency: ManagerSettingsCurrency;
  /** Предпочитаемый брендированный шаблон вакансий работодателя либо `null`, если не используется у компании. */
  default_vacancy_branded_template?: VacancyBrandedTemplate;
  /**
   * Предпочтение по использованию флага `send_sms`
   * при [приглашении соискателя](https://github.com/hhru/api/blob/master/docs/employer_negotiations.md#add-invite).
   * @example true
   */
  use_sms_notification: boolean;
}

/**
 * Предпочитаемая валюта
 * Предпочитаемая валюта при [публикации вакансии](#tag/Upravlenie-vakansiyami/operation/publish-vacancy).
 */
export interface ManagerSettingsCurrency {
  /**
   * Краткое обозначение валюты
   * @example "руб."
   */
  abbr: string;
  /**
   * Код валюты
   * @example "RUR"
   */
  code: string;
  /**
   * Название валюты
   * @example "Рубли"
   */
  name: string;
}

/**
 * Подсказки по ключевым словам поиска
 * Подсказки по ключевым словам поиска
 */
export interface SuggestsSearchKeyword {
  /** Массив ключевых слов */
  items: SuggestsSearchKeywordItem[];
}

export interface SuggestsSearchKeywordItem {
  /** Ключевое слово */
  text: string;
}

/**
 * Плохая авторизация
 * Информация о возникших ошибках
 */
export type ErrorsEmployerManagerBadAuthorizationErrors = ErrorsErrorRequestId & {
  /**
   * Описание ошибки
   * @example "Forbidden"
   */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsEmployerManagerBadAuthorizationError[];
};

/** Ошибка */
export interface ErrorsEmployerManagerBadAuthorizationError {
  /**
   * Список доступных для токена аккаунтов менеджера в случае, если используемый рабочий аккаунт заблокирован.
   * Актуально только в случае авторизации работодателя.
   * @minItems 1
   */
  allowed_accounts?: ManagerAccount[];
  /**
   * Ошибки при создании или редактировании менеджера работодателя:
   *   * `already_exist` — Менеджер с такой почтой уже существует
   *   * `creation_limit_exceeded` — Достигнут лимит на создание менеджеров
   *   * `not_editable` — Поле *field_name* недоступно для редактирования
   * @example "already_exist"
   */
  reason?: "already_exist" | "creation_limit_exceeded" | "not_editable";
  /**
   * Текстовый идентификатор типа ошибки
   * @example "oauth"
   */
  type: "forbidden" | "oauth" | "manager_extra_accounts" | "manager_accounts" | "managers";
  /**
   * Общие ошибки:
   *   * `bad_authorization` — Токен авторизации не существует или не валидный
   *   * `token_expired` — Время жизни access_token завершилось, необходимо [выполнить обновление access_token](#section/Avtorizaciya/Obnovlenie-pary-access-i-refresh-tokenov)
   *   * `token_revoked` — Токен отозван пользователем, приложению необходимо [запросить новую авторизацию](#section/Tipy-avtorizacij)
   *   * `application_not_found` — Ваше приложение было удалено
   *   * `used_manager_account_forbidden` — [Рабочий аккаунт заблокирован](https://github.com/hhru/api/blob/master/docs/errors.md#manager-accounts-blocked)
   *   * `manager_extra_account_not_found` — В заголовке передан некорректный id аккаунта
   *   * `email` — Менеджер с такой почтой уже существует
   *   * `user_auth_expected` — Ожидается авторизация пользователя, передана авторизация приложения
   * @example "bad_authorization"
   */
  value?:
    | "bad_authorization"
    | "token_expired"
    | "token_revoked"
    | "application_not_found"
    | "manager_extra_account_not_found"
    | "used_manager_account_forbidden"
    | "email"
    | "user_auth_expected";
}

/** Информация о новом менеджере */
export interface EmployerManagersAddEmployerManager {
  /** Дополнительный телефон менеджера */
  additional_phone?: EmployerManagersPhone & object;
  area: EmployerManagersAreaId;
  /** Адрес электронной почты менеджера */
  email: string;
  /** Имя менеджера */
  first_name: string;
  /** Является ли менеджер основным контактным лицом */
  is_main_contact_person: boolean;
  /** Фамилия менеджера */
  last_name: string;
  manager_type: EmployerManagersManagerTypeId;
  /** Отчество менеджера */
  middle_name?: string;
  /** Список [прав менеджера](#tag/Menedzhery-rabotodatelya/operation/get-employer-manager-types) */
  permissions?: EmployerManagersPermissions[];
  /** Основной телефон менеджера */
  phone: EmployerManagersPhone & object;
  /** Должность менеджера */
  position: string;
}

/** Тип менеджера */
export interface EmployerManagersManagerTypeId {
  /** Идентификатор [типа менеджера](#tag/Menedzhery-rabotodatelya/operation/get-employer-manager-types) */
  id: string;
}

/** Регион */
export interface EmployerManagersAreaId {
  /** Идентификатор региона из [справочника](https://github.com/hhru/api/blob/master/docs/areas.md) */
  id: string;
}

/** Права доступа */
export interface EmployerManagersPermissions {
  /** Идентификатор права */
  id: string;
}

/** Тело запроса для добавления работодателя в список видимости */
export interface ResumesPostResumeVisibilityListBody {
  /** Список передаваемых идентификаторов работодателей */
  items?: IncludesId[];
}

/** Проверка наличия дубликатов вакансии */
export interface VacancyDuplicates {
  /** Общее количество дубликатов вакансии */
  found: number;
  /** Существуют ли дубликаты вакансии */
  has_duplicates: boolean;
  /** Коллекция идентификаторов дубликатов вакансии */
  items: number[];
}

/**
 * Ошибка в теле запроса
 * Информация о возникших ошибках
 */
export type ErrorsBadRequestVacancyErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadRequestVacancyError[];
};

/** Общая ошибка */
export interface ErrorsBadRequestVacancyError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_request"
   */
  type: "bad_request" | "bad_argument";
  /** Название поля с ошибкой */
  value?: string;
}

/**
 * Рабочие аккаунты менеджера
 * Информация о рабочих аккаунтах менеджера
 */
export interface ManagerAccounts {
  /**
   * Идентификатор текущего рабочего аккаунта менеджера. Совпадает со значением переданного в заголовке `X-Manager-Account-Id`.
   * @example "87654321"
   */
  current_account_id: string;
  /**
   * Заблокирован ли главный рабочий аккаунт менеджера
   * @example false
   */
  is_primary_account_blocked: boolean;
  /**
   * Список рабочих аккаунтов менеджера
   * @minItems 0
   */
  items: ManagerAccount[];
  /**
   * Идентификатор главного рабочего аккаунта менеджера
   * @example "12345678"
   */
  primary_account_id: string;
}

/** Успешный ответ */
export type ArtifactsArtifactPhotoResponse = ArtifactsArtifactPhotoItems & IncludesPagination;

export interface ArtifactsArtifactPhotoItems {
  /**
   * Список изображений
   * @minItems 0
   */
  items: ArtifactsArtifactItem[];
}

/**
 * Список ключевых навыков
 * Список ключевых навыков
 */
export interface DictionariesSkillsResponse {
  /** Массив ключевых навыков */
  items: IncludesSkillSetItem[];
}

/** Ключевой навык */
export interface IncludesSkillSetItem {
  /** Идентификатор ключевого навыка */
  id: string;
  /** Название ключевого навыка */
  text: string;
}

/** Успешный ответ */
export interface EmployerManagersResponse {
  /** Найдено результатов */
  found: number;
  /**
   * Список менеджеров работодателя
   * @minItems 0
   */
  items: EmployerManagersEmployerManagerItem[];
  /** Номер страницы */
  page: number;
  /** Всего страниц */
  pages: number;
  /** Результатов на странице */
  per_page: number;
}

/** Менеджер */
export interface EmployerManagersEmployerManagerItem {
  /** Дополнительный телефон менеджера */
  additional_phone?: EmployerManagersPhone & object;
  area: EmployerManagersArea;
  /** Адрес электронной почты менеджера */
  email: string;
  /** Имя менеджера */
  first_name?: string;
  /** Полное имя менеджера */
  full_name?: string;
  /** Идентификатор менеджера */
  id: string;
  /** Является ли менеджер основным контактным лицом */
  is_main_contact_person?: boolean;
  /** Фамилия менеджера */
  last_name?: string;
  /** Отчество менеджера */
  middle_name?: string;
  /**
   * Полное имя менеджера
   * @deprecated
   */
  name?: string;
  /** Основной телефон менеджера */
  phone?: EmployerManagersPhone & object;
  /** Должность менеджера */
  position: string;
  /** Количество опубликованных (активных) вакансий у данного менеджера. `null` — если у пользователя нет прав на просмотр вакансий этого менеджера */
  vacancies_count?: number | null;
}

/**
 * Ошибка добавления вакансии в скрытые
 * Информация о возникших ошибках
 */
export type ErrorsBadArgumentVacancyErrors = ErrorsErrorRequestId & {
  /** Описание ошибки */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadArgumentVacancyError[];
};

/** Ошибка в параметре запроса */
export interface ErrorsBadArgumentVacancyError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "vacancies_blacklist"
   */
  type: "vacancies_blacklist";
  /**
   * Название поля с ошибкой:
   *
   * * `limit_exceeded` — превышен лимит на количество вакансий в списке скрытых
   * @example "limit_exceeded"
   */
  value?: "limit_exceeded";
}

/**
 * Ошибки в параметрах запроса
 * Информация о возникших ошибках
 */
export type ErrorsEmployerManagerBadArgumentErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsEmployerManagerBadArgumentError[];
};

/** Ошибка в параметре запроса */
export interface ErrorsEmployerManagerBadArgumentError {
  /**
   * Описание ошибки
   * @example "too_long_value"
   */
  reason?: string;
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_argument"
   */
  type: "bad_argument" | "bad_request" | "managers";
  /**
   * Название поля с ошибкой
   * @example "resume_id"
   */
  value?: string;
}

/** Ошибки */
export type ErrorsCombinationsBadAuthVacancyProlongate =
  | ErrorsBadAuthorizationErrors
  | ErrorsVacancyProlongateErrors
  | (ErrorsBadAuthorizationErrors & ErrorsVacancyProlongateErrors);

/**
 * Oшибки при продлении вакансии
 * Информация о возникших ошибках
 */
export type ErrorsVacancyProlongateErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsVacancyProlongateError[];
};

/** Ошибка */
export interface ErrorsVacancyProlongateError {
  /**
   * Тип ошибки
   * @example "vacancies"
   */
  type: "vacancies";
  /**
   * Причина ошибки:
   *
   * * `not_enough_purchased_services` — купленных услуг недостаточно для продления данного типа вакансии.
   * * `quota_exceeded` — квота менеджера на публикацию данного типа вакансии закончилась.
   * * `prolongation_forbidden` — продление вакансий недоступно текущему менеджеру.
   * * `unavailable_for_archived` — продление недоступно для архивной вакансии.
   * * `too_early` — продление раньше времени
   * @example "quota_exceeded"
   */
  value:
    | "not_enough_purchased_services"
    | "quota_exceeded"
    | "prolongation_forbidden"
    | "unavailable_for_archived"
    | "too_early";
}

export interface VacanciesVacancyUpgradeListResponse {
  /** Список улучшений для вакансий */
  items: VacanciesVacancyUpgradeListItem[];
}

/** Улучшение для вакансии */
export interface VacanciesVacancyUpgradeListItem {
  /**
   * Список возможных действий
   * @minItems 0
   */
  actions: VacanciesUpgradeFieldsAction[];
  vacancy_billing_type: VacanciesUpgradeFieldsBillingTypeFull;
  /** Объект с описанием причины, по которой невозможно улучшить вакансию до данного типа. `Null`, если массив `actions` не пустой */
  without_action?: (VacanciesUpgradeFieldsWithoutAction | IncludesNullableObject)[] | null;
}

/** Биллинговый тип вакансии */
export type VacanciesUpgradeFieldsBillingTypeFull = VacancyBillingTypeOutput & {
  /** Описание типа вакансии */
  description?: string;
};

/** Улучшение невозможно */
export interface VacanciesUpgradeFieldsWithoutAction {
  /** Описание причины, по которой улучшение вакансии до данного типа невозможно */
  reason: string;
}

/** Возможное действие */
export interface VacanciesUpgradeFieldsAction {
  /** Идентификатор заказа, ожидающего активации. Возвращается только для действий с `actions.type=activate` */
  cart_id?: number | null;
  /** Стоимость публикации. Возвращается только для действий с `actions.type=buy` */
  price?: VacanciesUpgradeFieldsPrice | IncludesNullableObject | null;
  /**
   * Тип действия:
   *
   * * `direct_upgrade` — публикации вакансий данного типа есть на счету. Вы можете изменить тип вакансии.
   * * `activate` — публикации вакансий данного типа есть в неактивированных заказах. Перейдите по ссылке, указанной в поле `actions.url`, и активируйте заказ. После этого станет доступно улучшение вакансии.
   * * `buy` — нет доступных публикаций вакансий данного типа. Перейдите по ссылке, указанной в поле `actions.url`, чтобы перейти к покупке публикаций нужного типа
   */
  type: string;
  /** Ссылка на действие */
  url?: string | null;
}

export interface VacanciesUpgradeFieldsPrice {
  /** Значение цены */
  amount: number;
  /** Идентификатор валюты. Возможные значения приведены в поле `currency` [справочника полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  currency_code?: string;
}

export interface ArtifactsArtifactUploadBody {
  /** Текстовое описание. Имеет смысл для `portfolio` */
  description?: string | null;
  /**
   * Файл изображения
   * @format binary
   */
  file: File;
  /** Тип артефакта: `photo` или `portfolio` */
  type: string;
}

/**
 * Подсказки по ключевым навыкам
 * Подсказки по ключевым навыкам
 */
export interface SuggestsSkillSet {
  /** Массив найденных ключевых навыков */
  items: IncludesSkillSetItem[];
}

export interface EmployerServicesEmployerServices {
  /**
   * Перечень услуг
   * @minItems 0
   */
  items: EmployerServicesEmployerServiceItem[];
}

/** Услуга */
export interface EmployerServicesEmployerServiceItem {
  /**
   * Время активации услуги (в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm`
   * @pattern ^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?((\+|-)[0-1][0-9]{3})?$
   */
  activated_at: string;
  /** Значения баланса. Только для пакетных услуг */
  balance?: EmployerServicesBalance | null;
  /**
   * Время истечения услуги (в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) с точностью до секунды: `YYYY-MM-DDThh:mm:ss±hhmm`
   * @pattern ^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?((\+|-)[0-1][0-9]{3})?$
   */
  expires_at: string;
  /** Идентификатор услуги */
  id: string;
  /** Тип услуги */
  service_type: EmployerServicesServiceType;
}

export interface EmployerServicesBalance {
  /** Текущее значение баланса */
  actual: number;
  /** Значение баланса на момент активации услуги */
  initial: number;
}

/** Тип услуги */
export interface EmployerServicesServiceType {
  /** Идентификатор типа услуги */
  id: string;
  /** Локализованное название типа услуги */
  name: string;
}

/** Скрытые работодатели */
export type EmployersEmployersBlacklistedResponse = IncludesPagination & EmployersEmployersBlacklisted;

export interface EmployersEmployersBlacklisted {
  /** Массив скрытых работодателей */
  items?: EmployersEmployersBlacklistedItem[];
  /** Превышено ли максимальное количество элементов в списке */
  limit_reached?: boolean;
}

/** Информация о скрытом работодателе */
export interface EmployersEmployersBlacklistedItem {
  /** Ссылка на представление компании на сайте */
  alternate_url?: string | null;
  /** Идентификатор компании */
  id?: string | null;
  /** Ссылки на логотипы работодателя разных размеров */
  logo_urls?: IncludesLogoUrls | IncludesNullableObject | null;
  /** Название компании */
  name: string;
  /** Количество открытых вакансий у работодателя */
  open_vacancies: number;
  /** URL, на который нужно сделать GET-запрос, чтобы получить информацию о компании */
  url?: string | null;
  /** Ссылка на поисковую выдачу вакансий данной компании */
  vacancies_url?: string | null;
}

/** Условия заполнения полей при [публикации вакансии](#tag/Upravlenie-vakansiyami/operation/publish-vacancy) */
export interface VacanciesVacancyConditions {
  accept_handicapped?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  accept_incomplete_resumes?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  accept_kids?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  accept_temporary?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  address?: VacanciesVacancyConditionFieldsRequiredWithTitle & {
    fields?: VacanciesVacancyConditionFieldsAddressFields;
  };
  allow_messages?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  area?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  billing_type?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  branded_template?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  code?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  contacts?: VacanciesVacancyConditionFieldsRequiredWithTitle & {
    fields?: VacanciesVacancyConditionFieldsContactFields;
  };
  custom_employer_name?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  department?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  description?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  driver_license_types?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  employment?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  experience?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  key_skills?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  languages?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  manager?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  name?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  professional_roles?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  response_letter_required?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  response_notifications?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  response_url?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle & VacanciesVacancyConditionFieldsRegexp;
  salary?: VacanciesVacancyConditionFieldsRequiredWithTitle & {
    fields?: VacanciesVacancyConditionFieldsSalaryFields;
  };
  schedule?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  specializations?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  test?: VacanciesVacancyConditionFieldsRequiredWithTitle & {
    fields?: VacanciesVacancyConditionFieldsTestFields;
  };
  type?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  working_days?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  working_time_intervals?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  working_time_modes?: VacanciesVacancyConditionFieldsRequiredCountWithTitle;
  [key: string]: any;
}

/** Условия для поля */
export interface VacanciesVacancyConditionFieldsRequiredWithTitle {
  /** Является ли поле необходимым? */
  required?: boolean | null;
}

/** Условия для поля */
export type VacanciesVacancyConditionFieldsRequiredCountWithTitle = VacanciesVacancyConditionFieldsMaxMinCount &
  VacanciesVacancyConditionFieldsRequired;

export interface VacanciesVacancyConditionFieldsRequired {
  /** Является ли поле необходимым? */
  required?: boolean | null;
}

export interface VacanciesVacancyConditionFieldsMaxMinCount {
  /** Максимальное количество объектов для полей, в которых передается список. Если `null` — количество неограниченно */
  max_count?: number | null;
  /** Минимальное количество объектов для полей, в которых передается список */
  min_count?: number | null;
}

/** Условия для полей */
export type VacanciesVacancyConditionFieldsSalaryFields = {
  currency?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  from?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  gross?: VacanciesVacancyConditionFieldsRequiredWithTitle;
  to?: VacanciesVacancyConditionFieldsRequiredWithTitle;
} | null;

/** Условия для полей */
export type VacanciesVacancyConditionFieldsContactFields = {
  email?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  name?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  phones?: VacanciesVacancyConditionFieldsRequiredCountWithTitle & {
    fields?: VacanciesVacancyConditionFieldsPhoneFields;
  };
} | null;

/** Условия для полей */
export type VacanciesVacancyConditionFieldsPhoneFields = {
  city?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle & VacanciesVacancyConditionFieldsRegexp;
  comment?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle;
  country?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle & VacanciesVacancyConditionFieldsRegexp;
  formatted?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle & VacanciesVacancyConditionFieldsRegexp;
  number?: VacanciesVacancyConditionFieldsRequiredLengthWithTitle & VacanciesVacancyConditionFieldsRegexp;
} | null;

export interface VacanciesVacancyConditionFieldsRegexp {
  /** Регулярное выражение, которому должно отвечать значение поля */
  regexp?: string | null;
}

/** Условия для поля */
export type VacanciesVacancyConditionFieldsRequiredLengthWithTitle = VacanciesVacancyConditionFieldsMaxMinLength &
  VacanciesVacancyConditionFieldsRequired;

export interface VacanciesVacancyConditionFieldsMaxMinLength {
  /** Максимальная длина для текстовых полей */
  max_length?: number | null;
  /** Минимальная длина для текстовых полей */
  min_length?: number | null;
}

/** Условия для полей */
export type VacanciesVacancyConditionFieldsAddressFields = {
  show_metro_only?: VacanciesVacancyConditionFieldsRequired;
} | null;

/** Условия для полей */
export type VacanciesVacancyConditionFieldsTestFields = {
  required?: VacanciesVacancyConditionFieldsRequired;
} | null;

export interface SuggestsEducationalInstitutions {
  /**
   * Массив найденных учебных заведений
   * Информация о найденных учебных заведениях
   */
  items: IncludesEducationalInstitutionItem[];
}

export interface IncludesEducationalInstitutionItem {
  /** Сокращенное название учебного заведения */
  acronym?: string | null;
  /** Регион */
  area: SuggestsArea & object;
  /** Идентификатор учебного заведения */
  id: string;
  /** Альтернативное название учебного заведения */
  synonyms?: string | null;
  /** Полное название учебного заведения */
  text: string;
}

/** Успешный ответ */
export type ArtifactsArtifactPortfolioResponse = ArtifactsArtifactPortfolioItems & IncludesPagination;

export interface ArtifactsArtifactPortfolioItems {
  /**
   * Список изображений
   * @minItems 0
   */
  items: ArtifactsArtifactPortfolioItem[];
}

/** Изображение */
export type ArtifactsArtifactPortfolioItem = ArtifactsArtifactItem & ArtifactsPortfolioDescription;

/** Ошибки */
export type ErrorsCombinationsBadJsonDataAddEditVacancyError =
  | ErrorsBadJsonDataErrors
  | ErrorsBadJsonDataAddEditVacancyErrors
  | (ErrorsBadJsonDataErrors & ErrorsBadJsonDataAddEditVacancyErrors);

/**
 * Невалидный json
 * Информация о возникших ошибках
 */
export type ErrorsBadJsonDataAddEditVacancyErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsBadJsonDataAddEditVacancyError[];
};

/** Ошибка при публикации или редактировании вакансии */
export interface ErrorsBadJsonDataAddEditVacancyError {
  /**
   * Описание ошибки
   * @example "Значение неправильное"
   */
  description?: string | null;
  /**
   * Путь до параметра, в котором возникла ошибка.
   *
   * Для указания параметра используется формат JsonPointer [RFC 6901](https://tools.ietf.org/html/rfc6901)
   * @example "/contacts/phones/1/number"
   */
  pointer?: string;
  /**
   * Причина ошибки. Возможные значения:
   *   * `required` - отстутствует поле в запросе
   *   * `invalid` - недопустимое значение в поле запроса
   *   * `is_empty` — пустое значение
   *   * `wrong_size` — значение имеет неправильный размер
   *   * `is_too_short` — значение имеет слишком маленький размер
   *   * `is_too_long` — значение имеет слишком большой размер
   *   * `currency_code_is_invalid` — валюта заработной платы введена некорректно
   *   * `chosen_area_is_not_a_leaf_or_not_exist` — местоположение вакансии введено неверно (например, передан несуществующий ID) или не является конечным регионом (город, населенный пункт)
   *   * `email_in_description` — в описании вакансии содержится email
   *   * `anonymous_vacancy_contains_address` — в анонимной вакансии содержится адрес работодателя
   *   * `anonymous_vacancy_has_real_company_name` — в названии вакансии содержится название компании работодателя
   *   * `only_for_anonymous_type` — действие доступно только для анонимных вакансий
   *   * `address_is_disabled` — адрес недоступен
   *   * `vacancy_type_employer_billing_type_mismatch` — тип вакансии не совместим с текущим биллинг-типом
   *   * `only_for_direct_type` — действие доступно только для прямых вакансий
   *   * `address_is_empty_with_checked_show_metro_flag` — введен пустой адрес, но указана опция показывать метро
   *   * `address_has_no_metro_but_checked_show_metro_flag` — по введенному адресу не доступно метро, но указана опция показывать метро
   *   * `default_vacancy_branded_template_is_invalid_or_not_enough_purchased_services` — в запросе указан шаблон, который отсутствует в списке доступных шаблонов (этот список можно получить [запросом](#tag/Informaciya-o-rabotodatele/operation/get-vacancy-branded-templates-list)). Также шаблон может отсутствовать в списке доступных шаблонов, если не оплачена услуга использования [брендированного шаблона вакансии](https://hh.ru/price?from=menu#branding)
   *   * `department_code_prohibited_in_anonymous_vacancy` — нельзя указать код подразделения для анонимной вакансии
   *   * `branded_template_prohibited_in_anonymous_vacancy` — использование брендированного шаблона невозможно для анонимной вакансии
   *   * `value_conflict_with_business_rules` — публикация вакансии с указанным `billing_type` запрещена
   *   * `can_not_accept_kids` — вакансия недоступна несовершеннолетним
   * @example "is_empty"
   */
  reason?:
    | "required"
    | "invalid"
    | "is_empty"
    | "wrong_size"
    | "is_too_short"
    | "is_too_long"
    | "currency_code_is_invalid"
    | "chosen_area_is_not_a_leaf_or_not_exist"
    | "email_in_description"
    | "anonymous_vacancy_contains_address"
    | "anonymous_vacancy_has_real_company_name"
    | "only_for_anonymous_type"
    | "address_is_disabled"
    | "vacancy_type_employer_billing_type_mismatch"
    | "only_for_direct_type"
    | "address_is_empty_with_checked_show_metro_flag"
    | "address_has_no_metro_but_checked_show_metro_flag"
    | "default_vacancy_branded_template_is_invalid_or_not_enough_purchased_services"
    | "department_code_prohibited_in_anonymous_vacancy"
    | "branded_template_prohibited_in_anonymous_vacancy"
    | "value_conflict_with_business_rules"
    | "can_not_accept_kids";
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_json_data"
   */
  type: "bad_json_data" | "vacancies";
  /**
   * Название поля с ошибкой
   * @example "salary"
   */
  value?: string;
}

/** Информация о вариантах публикации вакансии */
export interface VacanciesAvailableVacancyTypeResponse {
  /** Массив вариантов публикации вакансии */
  items: VacanciesAvailableVacancyTypeItem[];
}

/** Вариант публикации вакансии */
export interface VacanciesAvailableVacancyTypeItem {
  /** Общее количество публикаций, доступных данному менеджеру */
  available_publications_count: number;
  /** Описание типа публикации */
  description: string;
  /** Название типа публикации */
  name: string;
  /** Список регионов, где может быть опубликована вакансия и количество публикаций, доступных работодателю */
  publications: VacancyPublications;
  /** Биллинговый тип вакансии. Возможные значения приведены в поле `vacancy_billing_type` [справочника полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
  vacancy_billing_type: object & VacancyBillingType;
  /** Список типов вакансии */
  vacancy_types: VacancyTypes;
}

/** Список типов вакансии */
export type VacancyTypes = VacancyType[];

/** Список регионов, где может быть опубликована вакансия и количество публикаций, доступных работодателю */
export type VacancyPublications = VacancyPublication[];

/** Информация о публикации */
export interface VacancyPublication {
  /** URL на список регионов, в которых можно опубликовать вакансию данного типа. Список возвращается в древовидной структуре и публикация вакансий возможна только в конечных (листовых) узлах дерева. Они помечены флагом `can_publish=true` */
  areas_url: string;
  /** Количество публикаций в регионе, доступных работодателю */
  count: number;
  /** Название региона */
  name: string;
}

/**
 * Ошибка конфликта запроса при одновременном изменении параметров
 * Информация о возникших ошибках
 */
export type ErrorsConflictBothChangedErrors = ErrorsErrorRequestId & {
  /** Имя аргумента, с которым связана ошибка */
  bad_argument?: "name" | "subscription";
  /** Список аргументов, с которыми связаны ошибки */
  bad_arguments?: IncludesNameDescription[];
  /** Описание причины ошибки */
  description?: string;
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsConflictBothChangedError[];
};

/** Объект */
export interface IncludesNameDescription {
  /** Описание */
  description: string;
  /** Название */
  name: string;
}

/** Ошибка конфликта запроса при одновременном изменении параметров */
export interface ErrorsConflictBothChangedError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "bad_argument"
   */
  type: "bad_argument";
  /**
   * Имя конфликтующего аргумента
   * @example "name"
   */
  value: "name" | "subscription" | "email_subscription";
}

/**
 * Автопоиск или менеджер не найден
 * Информация о возникших ошибках
 */
export type ErrorsNotFoundSavedSearchErrors = ErrorsErrorRequestId & {
  /**
   * Массив с данными ошибок
   * @minItems 1
   */
  errors: ErrorsNotFoundSavedSearchError[];
};

/** Ошибка */
export interface ErrorsNotFoundSavedSearchError {
  /**
   * Текстовый идентификатор типа ошибки
   * @example "saved_searches"
   */
  type: "saved_searches" | "not_found";
  /**
   * Название поля запроса с ошибкой. Возможные значения:
   *
   * * `saved_search_not_found` — автопоиск не найден или не принадлежит текущему пользователю.
   * * `manager_not_found` — менеджер не найден
   * @example "saved_search_not_found"
   */
  value?: "saved_search_not_found" | "manager_not_found";
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.hh.ru" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HeadHunter API
 * @version 1.0.0
 * @termsOfService https://dev.hh.ru/admin/developer_agreement
 * @baseUrl https://api.hh.ru
 * @contact API Support <api@hh.ru> (https://feedback.hh.ru/)
 *
 * [Switch to English](https://api.hh.ru/openapi/en/redoc) | По-русски
 *
 * В OpenAPI ведется пока что только небольшая часть документации
 * [Основная документация](https://github.com/hhru/api).
 *
 * Для поиска по документации можно использовать Ctrl+F.
 *
 * # Авторизация
 *
 * API поддерживает следующие уровни авторизации:
 *   - [авторизация приложения](#section/Avtorizaciya/Avtorizaciya-prilozheniya)
 *   - [авторизация пользователя](#section/Avtorizaciya/Avtorizaciya-polzovatelya)
 *
 * * [Авторизация пользователя](#section/Avtorizaciya/Avtorizaciya-polzovatelya)
 *   * [Правила формирования специального redirect_uri](#section/Avtorizaciya/Pravila-formirovaniya-specialnogo-redirect_uri)
 *   * [Процесс авторизации](#section/Avtorizaciya/Process-avtorizacii)
 *   * [Успешное получение временного `authorization_code`](#get-authorization_code)
 *   * [Получение access и refresh токенов](#section/Avtorizaciya/Poluchenie-access-i-refresh-tokenov)
 * * [Обновление пары access и refresh токенов](#section/Avtorizaciya/Obnovlenie-pary-access-i-refresh-tokenov)
 * * [Инвалидация токена](#tag/Avtorizaciya-rabotodatelya/operation/invalidate-token)
 * * [Запрос авторизации под другим пользователем](#section/Avtorizaciya/Zapros-avtorizacii-pod-drugim-polzovatelem)
 * * [Авторизация под разными рабочими аккаунтами](#section/Avtorizaciya/Avtorizaciya-pod-raznymi-rabochimi-akkauntami)
 * * [Авторизация приложения](#section/Avtorizaciya/Avtorizaciya-prilozheniya)
 *
 *
 * ## Авторизация пользователя
 * Для выполнения запросов от имени пользователя необходимо пользоваться токеном пользователя.
 *
 * В начале приложению необходимо направить пользователя (открыть страницу) по адресу:
 *
 * ```
 * https://hh.ru/oauth/authorize?
 * response_type=code&
 * client_id={client_id}&
 * state={state}&
 * redirect_uri={redirect_uri}
 * ```
 *
 * Обязательные параметры:
 *
 * * `response_type=code` — указание на способ получения авторизации, используя `authorization code`
 * * `client_id` — идентификатор, полученный при создании приложения
 *
 *
 * Необязательные параметры:
 *
 * * `state` — в случае указания, будет включен в ответный редирект.
 * Это позволяет исключить возможность взлома путём подделки межсайтовых
 * запросов. Подробнее об этом:
 * [RFC 6749. Section 10.12](http://tools.ietf.org/html/rfc6749#section-10.12)
 * * `redirect_uri` — uri для перенаправления пользователя после
 * авторизации. Если не указать, используется из настроек приложения. При
 * наличии происходит валидация значения. Вероятнее всего, потребуется сделать
 * urlencode значения параметра.
 *
 * ## Правила формирования специального redirect_uri
 *
 * К примеру, если в настройках сохранен `http://example.com/oauth`, то разрешено
 * указывать:
 *
 * * `http://www.example.com/oauth` — поддомен;
 * * `http://www.example.com/oauth/sub/path` — уточнение пути;
 * * `http://example.com/oauth?lang=RU` — дополнительный параметр;
 * * `http://www.example.com/oauth/sub/path?lang=RU` — всё вместе.
 *
 * Запрещено:
 *
 * * `https://example.com/oauth` — различные протоколы;
 * * `http://wwwexample.com/oauth` — различные домены;
 * * `http://wwwexample.com/` — другой путь;
 * * `http://example.com/oauths` — другой путь;
 * * `http://example.com:80/oauths` — указание изначально отсутствующего порта;
 *
 * ## Процесс авторизации
 *
 * Если пользователь не авторизован на сайте, ему будет показана форма
 * авторизации на сайте. После прохождения авторизации на сайте, пользователю
 * будет выведена форма с запросом разрешения доступа вашего приложения к его
 * персональным данным.
 *
 * Если пользователь не разрешает доступ приложению, пользователь будет
 * перенаправлен на указанный `redirect_uri` с `?error=access_denied` и
 * `state={state}`, если таковой был указан при первом запросе.
 *
 * <a name="get-authorization_code"></a>
 * ### Успешное получение временного `authorization_code`
 *
 * В случае разрешения прав, в редиректе будет указан
 * временный `authorization_code`:
 *
 * ```http
 * HTTP/1.1 302 FOUND
 * Location: {redirect_uri}?code={authorization_code}
 * ```
 *
 * Если пользователь авторизован на сайте и доступ данному приложению однажды
 * ранее выдан, ответом будет сразу вышеописанный редирект с `authorization_code`
 * (без показа формы логина и выдачи прав).
 *
 * ## Получение access и refresh токенов
 *
 * После получения `authorization_code` приложению необходимо сделать сервер-сервер запрос `POST https://hh.ru/oauth/token` для обмена полученного
 * `authorization_code` на `access_token`.
 *
 * В теле запроса необходимо передать [дополнительные параметры](#required_parameters).
 *
 * Тело запроса необходимо передавать в стандартном
 * `application/x-www-form-urlencoded` с указанием соответствующего заголовка
 * `Content-Type`.
 *
 * `authorization_code` имеет довольно короткий срок жизни, при его истечении
 * необходимо запросить новый.
 *
 * ## Обновление пары access и refresh токенов
 * `access_token` также имеет срок жизни (ключ `expires_in`, в секундах), при его
 * истечении приложение должно сделать запрос с `refresh_token` для получения
 * нового.
 *
 * Запрос необходимо делать в `application/x-www-form-urlencoded`.
 *
 * ```
 * POST https://hh.ru/oauth/token
 * ```
 *
 * В теле запроса необходимо передать [дополнительные параметры](#required_parameters)
 *
 * `refresh_token` можно использовать только один раз и только по истечению
 * срока действия `access_token`.
 *
 * После получения новой пары access и refresh токенов, их необходимо использовать
 * в дальнейших запросах в api и запросах на продление токена.
 *
 * ## Запрос авторизации под другим пользователем
 *
 * Возможен следующий сценарий:
 *
 * 1. Приложение перенаправляет пользователя на сайт с запросом авторизации.
 * 2. Пользователь на сайте уже авторизован и данному приложение доступ уже был
 * разрешен.
 * 3. Пользователю будет предложена возможность продолжить работу под текущим аккаунтом,
 * либо зайти под другим аккаунтом.
 *
 * Если есть необходимость, чтобы на шаге 3 сразу происходило перенаправление (redirect) с временным токеном,
 * необходимо добавить к запросу `/oauth/authorize...` параметр `skip_choose_account=true`.
 * В этом случае автоматически выдаётся доступ пользователю авторизованному на сайте.
 *
 * Если есть необходимость всегда показывать форму авторизации, приложение может
 * добавить к запросу `/oauth/authorize...` параметр `force_login=true`. В этом
 * случае, пользователю будет показана форма авторизации с логином и паролем
 * даже в случае, если пользователь уже авторизован.
 *
 * Это может быть полезно приложениям, которые предоставляют сервис только для
 * соискателей. Если пришел пользователь-работодатель, приложение может предложить
 * пользователю повторно разрешить доступ на сайте, уже указав
 * другую учетную запись.
 *
 * Также, после авторизации приложение может показать пользователю сообщение:
 *
 * ```
 * Вы вошли как %Имя_Фамилия%. Это не вы?
 * ```
 * и предоставить ссылку с `force_login=true` для возможности захода под
 * другим логином.
 *
 * ## Авторизация под разными рабочими аккаунтами
 *
 * Для получения списка рабочих аккаунтов менеджера и для работы под разными рабочими аккаунтами менеджера необходимо прочитать документацию по [рабочим аккаунтам менеджера](#tag/Menedzhery-rabotodatelya/operation/get-manager-accounts)
 *
 * ## Авторизация приложения
 *
 * Токен приложения необходимо сгенерировать 1 раз.
 * В случае, если токен был скомпрометирован, его нужно запросить еще раз. При этом ранее выданный токен отзывается.
 * Владелец приложения может посмотреть актуальный `access_token` для приложения на сайте [https://dev.hh.ru/admin](https://dev.hh.ru/admin). В случае, если вы еще ни разу [не получали токен приложения](#section/Avtorizaciya/Avtorizaciya-prilozheniya), токен отображаться не будет.
 *
 * <a name="get-client-token"></a>
 * ### Получение токена приложения
 * Для получения `access_token` необходимо сделать запрос:
 *
 * ```
 * POST https://hh.ru/oauth/token
 * ```
 *
 * В теле запроса необходимо передать [дополнительные параметры](#required_parameters).
 * Тело запроса необходимо передавать в стандартном
 * `application/x-www-form-urlencoded` с указанием соответствующего заголовка `Content-Type`.
 *
 * Данный `access_token` имеет **неограниченный** срок жизни. При повторном запросе ранее выданный токен отзывается и выдается новый. Запрашивать `access_token` можно не чаще, чем один раз в 5 минут.
 *
 * В случае компрометации токена необходимо [инвалидировать](#tag/Avtorizaciya-rabotodatelya/operation/invalidate-token) скомпроментированный токен и запросить токен заново!
 *
 * <!-- ReDoc-Inject: <security-definitions> -->
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  resumePhoneConfirm = {
    /**
     * No description
     *
     * @tags Резюме. Работа с телефоном
     * @name ConfirmPhoneInResume
     * @summary Подтвердить телефон кодом
     * @request POST:/resume_phone_confirm
     * @secure
     */
    confirmPhoneInResume: (
      data: {
        /**
         * Телефон который надо подтвердить
         * @example "8(454)555-55-55"
         */
        phone: string;
        /**
         * Код для подтверждения
         * @example "5675"
         */
        code: string;
      },
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors>({
        path: `/resume_phone_confirm`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),
  };
  me = {
    /**
     * No description
     *
     * @tags Информация о соискателе, Информация о менеджере, Информация о приложении
     * @name GetCurrentUserInfo
     * @summary Информация о текущем пользователе
     * @request GET:/me
     * @secure
     */
    getCurrentUserInfo: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<MeProfile, ErrorsBadAuthorizationErrors>({
        path: `/me`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Редактирование ФИО или изменение флага «ищу работу». Данные можно редактировать только группами
     *
     * @tags Информация о соискателе
     * @name EditCurrentUserInfo
     * @summary Редактирование информации авторизованного пользователя
     * @request POST:/me
     * @secure
     */
    editCurrentUserInfo: (
      data: MeChangeName | MeSetInSearch,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors>({
        path: `/me`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),
  };
  oauth = {
    /**
     * No description
     *
     * @tags Авторизация приложения, Авторизация работодателя, Авторизация соискателя
     * @name Authorize
     * @summary Получение access-токена
     * @request POST:/oauth/token
     * @secure
     */
    authorize: (data: AuthCode | AuthRefreshToken | AuthClientCredentials, params: RequestParams = {}) =>
      this.request<AuthUserTokenAndAppToken, ErrorsCombinationsAuthBadParameters | ErrorsBadAuthorizationErrors>({
        path: `/oauth/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description <a name="invalidate_token"></a> Инвалидация работает только на действующем access-токене. После инвалидации токен нельзя будет запросить с помощью refresh-токена - для работы необходимо будет заново авторизоваться в API. Таким образом можно инвалидировать только токен пользователя.
     *
     * @tags Авторизация работодателя, Авторизация соискателя
     * @name InvalidateToken
     * @summary Инвалидация токена
     * @request DELETE:/oauth/token
     * @secure
     */
    invalidateToken: (params: RequestParams = {}) =>
      this.request<any, ErrorsBadAuthorizationErrors>({
        path: `/oauth/token`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  employers = {
    /**
     * No description
     *
     * @tags Менеджеры работодателя
     * @name EditEmployerManager
     * @summary Редактирование менеджера
     * @request PUT:/employers/{employer_id}/managers/{manager_id}
     * @secure
     */
    editEmployerManager: (
      employerId: string,
      managerId: string,
      data: EmployerManagersManagerData,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        void,
        ErrorsEmployerManagerBadArgumentErrors | ErrorsEmployerManagerBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/managers/${managerId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Менеджеры работодателя
     * @name GetEmployerManager
     * @summary Получение информации о менеджере
     * @request GET:/employers/{employer_id}/managers/{manager_id}
     * @secure
     */
    getEmployerManager: (
      employerId: string,
      managerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployerManagersEmployerManagerInfo, ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/managers/${managerId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление менеджера занимает некоторое время. По этой причине, если сразу после успешного удаления менеджера вы запросите, например, список менеджеров, в ответе может вернуться удаленный менеджер.
     *
     * @tags Менеджеры работодателя
     * @name DeleteEmployerManager
     * @summary Удаление менеджера
     * @request DELETE:/employers/{employer_id}/managers/{manager_id}
     * @secure
     */
    deleteEmployerManager: (
      employerId: string,
      managerId: string,
      query: {
        /** Идентификатор менеджера, которому передаются данные, связанные с удаляемым менеджером, в частности: вакансии, отклики, папки отобранных резюме, комментарии к соискателю, автопоиски и т. п. */
        successor_id: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        void,
        ErrorsEmployerManagerBadArgumentErrors | ErrorsEmployerManagerBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/managers/${managerId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Адреса работодателя
     * @name GetEmployerAddresses
     * @summary Список адресов работодателя
     * @request GET:/employers/{employer_id}/addresses
     * @secure
     */
    getEmployerAddresses: (
      employerId: string,
      query?: {
        /**
         * Позволяет загрузить все адреса, изменённые после этой даты (добавление, удаление или изменение адреса). Изменения возвращаются без пагинации. Значение указывается в формате [ISO 8601](https://github.com/hhru/api/blob/master/docs/general.md#date-format) - `YYYY-MM-DDThh:mm:ss` или c указанием отступа для часового пояса `YYYY-MM-DDThh:mm:ss±hhmm`. Максимальное значение отступа от текущей даты - 7 дней. При передаче этого параметра, для каждого адреса в теле ответа возвращается поле `deleted`, указывающее на то, удалён ли адрес.
         * @pattern ^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?((\+|-)[0-1][0-9]{3})?$
         */
        changed_after?: string;
        /** Количество элементов на странице выдачи. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). Значение по умолчанию и максимальное значение per_page составляет 10000. */
        per_page?: number;
        /** Порядковый номер страницы в выдаче. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). По умолчанию нумерация начинается с 0 страницы. */
        page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EmployerAddressesEmployerAddressResponse,
        ErrorsBadArgumentEmployerAddressErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/addresses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает информацию о предпочтениях менеджера. Проще всего получить URL из поля `manager_settings_url` объекта `manager` в [информации о текущем пользователе](#tag/Rabotodatelskie/operation/get-current-user-info). Предпочтения менеджера *не влияют* на действия в API по умолчанию. Например, брендированный шаблон оформления (`default_vacancy_branded_template`) не будет применен автоматически при публикации вакансии, если шаблон не был передан. Приложение может использовать эту информацию для того, чтобы реализовать логику предзаполнения полей.
     *
     * @tags Менеджеры работодателя
     * @name GetManagerSettings
     * @summary Предпочтения менеджера
     * @request GET:/employers/{employer_id}/managers/{manager_id}/settings
     * @secure
     */
    getManagerSettings: (
      employerId: string,
      managerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ManagerSettings, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/managers/${managerId}/settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Менеджеры работодателя
     * @name GetEmployerManagers
     * @summary Список менеджеров работодателя
     * @request GET:/employers/{employer_id}/managers
     * @secure
     */
    getEmployerManagers: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployerManagersResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/managers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Менеджеры работодателя
     * @name AddEmployerManager
     * @summary Добавление менеджера
     * @request POST:/employers/{employer_id}/managers
     * @secure
     */
    addEmployerManager: (
      employerId: string,
      data: EmployerManagersAddEmployerManager,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EmployerManagersEmployerManagerId,
        ErrorsEmployerManagerBadArgumentErrors | ErrorsEmployerManagerBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/managers`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод доступен менеджеру только для просмотра своего дневного лимита
     *
     * @tags Менеджеры работодателя
     * @name GetEmployerManagerLimits
     * @summary Дневной лимит просмотра резюме для текущего менеджера
     * @request GET:/employers/{employer_id}/managers/{manager_id}/limits/resume
     * @secure
     */
    getEmployerManagerLimits: (
      employerId: string,
      managerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployerManagersEmployerManagerLimits, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/managers/${managerId}/limits/resume`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Менеджеры работодателя
     * @name GetEmployerManagerTypes
     * @summary Справочник типов и прав менеджера
     * @request GET:/employers/{employer_id}/manager_types
     * @secure
     */
    getEmployerManagerTypes: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployerManagerTypesResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/manager_types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список регионов, в которых на данный момент есть активные вакансии от указанного работодателя. Значения в справочнике могут поменяться в любой момент
     *
     * @tags Информация о работодателе
     * @name GetEmployerVacancyAreas
     * @summary Список регионов, в которых есть активные вакансии
     * @request GET:/employers/{employer_id}/vacancy_areas/active
     * @secure
     */
    getEmployerVacancyAreas: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        EmployersEmployerVacancyAreasResponse,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/vacancy_areas/active`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description При указании параметров пагинации (`page`, `per_page`) работает ограничение: глубина возвращаемых результатов не может быть больше `5000`. Например, возможен запрос `per_page=10&page=499` (выдача с `4991` по `5000` работодателя), но запрос с `per_page=10&page=500` вернёт ошибку (выдача с `5001` до `5010` работодателя)
     *
     * @tags Работодатель
     * @name SearchEmployer
     * @summary Поиск работодателя
     * @request GET:/employers
     * @secure
     */
    searchEmployer: (
      query?: {
        /** Текст для поиска. Переданное значение ищется в названии и описании работодателя */
        text?: string;
        /** Идентификатор региона работодателя, множественный параметр. Идентификаторы регионов можно узнать в [справочнике регионов](https://github.com/hhru/api/blob/master/docs/areas.md) */
        area?: string;
        /** Тип работодателя, множественный параметр. Разрешенные значения перечислены в [справочнике](#tag/Obshie-spravochniki/operation/get-dictionaries) в поле `employer_type` */
        type?: string;
        /** Возвращать только работодателей у которых есть в данный момент открытые вакансии (`true`) или же всех (`false`). По умолчанию — `false` */
        only_with_vacancies?: boolean;
        /** Номер страницы с работодателями (считается от `0`, по умолчанию — `0`) */
        page?: number;
        /** Количество элементов на страницу (по умолчанию — 20, максимум — 100 ) */
        per_page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployersEmployersList, ErrorsBadArgumentErrors>({
        path: `/employers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Внимание! Значения в справочниках могут поменяться в любой момент. Не нужно завязываться на них. Использование брендированных шаблонов вакансии доступно работодателям, оплатившим и активировавшим соответствующую услугу. Подробнее на сайте [hh.ru](https://hh.ru/article/brand). Брендированные шаблоны можно использовать при [публикации и редактировании вакансий](https://github.com/hhru/api/blob/master/docs/vacancies.md#branded-template-field).
     *
     * @tags Информация о работодателе
     * @name GetVacancyBrandedTemplatesList
     * @summary Список доступных бренд шаблонов вакансий работодателя
     * @request GET:/employers/{employer_id}/vacancy_branded_templates
     * @secure
     */
    getVacancyBrandedTemplatesList: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployersVacancyBrandedTemplatesList, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/vacancy_branded_templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет указанного работодателя в [список скрытых работодателей](#tag/Skrytye-vakansii/operation/get-blacklisted-vacancies)
     *
     * @tags Скрытые работодатели
     * @name AddEmployerToBlacklisted
     * @summary Добавление работодателя в список скрытых
     * @request PUT:/employers/blacklisted/{employer_id}
     * @secure
     */
    addEmployerToBlacklisted: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        | ErrorsBadArgumentEmployerBlacklistErrors
        | ErrorsBadAuthorizationErrors
        | ErrorsNotFoundEmployersBlacklistedErrors
      >({
        path: `/employers/blacklisted/${employerId}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Удаляет указанного работодателя из [списка скрытых работодателей](#tag/Skrytye-vakansii/operation/get-blacklisted-vacancies)
     *
     * @tags Скрытые работодатели
     * @name DeleteEmployerFromBlacklisted
     * @summary Удаление работодателя из списка скрытых
     * @request DELETE:/employers/blacklisted/{employer_id}
     * @secure
     */
    deleteEmployerFromBlacklisted: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundEmployersBlacklistedErrors>({
        path: `/employers/blacklisted/${employerId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает данные о работодателе со ссылкой на выдачу вакансий этого работодателя
     *
     * @tags Работодатель
     * @name GetEmployerInfo
     * @summary Информация о работодателе
     * @request GET:/employers/{employer_id}
     * @secure
     */
    getEmployerInfo: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployersEmployerInfo, ErrorsNotFoundErrors>({
        path: `/employers/${employerId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает [подмножество работодателей](#tag/Rabotodatel/operation/search-employer), скрытых пользователем, а также один дополнительный параметр
     *
     * @tags Скрытые работодатели
     * @name GetBlacklistedEmployers
     * @summary Список скрытых работодателей
     * @request GET:/employers/blacklisted
     * @secure
     */
    getBlacklistedEmployers: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployersEmployersBlacklistedResponse, ErrorsBadAuthorizationErrors>({
        path: `/employers/blacklisted`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список департаментов работодателя. Значения в справочнике могут поменяться в любой момент
     *
     * @tags Информация о работодателе
     * @name GetEmployerDepartments
     * @summary Справочник департаментов работодателя
     * @request GET:/employers/{employer_id}/departments
     * @secure
     */
    getEmployerDepartments: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployersEmployerDepartmentsResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/departments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Каждая подключенная услуга отображается отдельным объектом в массиве `items`, даже при условии, что подключено несколько услуг одного типа. Если у работодателя нет активных услуг, то в ответе придет пустой массив `items`.
     *
     * @tags Услуги работодателя
     * @name GetPayableApiActions
     * @summary Информация по активным услугам API для платных методов
     * @request GET:/employers/{employer_id}/services/payable_api_actions/active
     * @secure
     */
    getPayableApiActions: (
      employerId: number,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployerServicesEmployerServices, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/services/payable_api_actions/active`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список опубликованных вакансий. Если передан параметр `resume_id`, то в список попадут только те вакансии, которые подходят для указанного резюме. Кроме того, ответ будет содержать дополнительные поля
     *
     * @tags Вакансии
     * @name GetActiveVacancyList
     * @summary Просмотр списка опубликованных вакансий
     * @request GET:/employers/{employer_id}/vacancies/active
     * @secure
     */
    getActiveVacancyList: (
      employerId: string,
      query?: {
        /**
         * Номер страницы (считается от 0)
         * @default 0
         */
        page?: number;
        /**
         * Количество элементов
         * @max 50
         * @default 20
         */
        per_page?: number;
        /** Идентификатор менеджера, вакансии которого будут получены в ответе. По умолчанию возвращаются вакансии текущего пользователя. Если передать несколько `manager_id`, будет использован последний */
        manager_id?: string;
        /** Строка для поиска по названию вакансии */
        text?: string;
        /** Идентификатор региона с вакансией. Чтобы получить идентификаторы регионов, в которых есть активные вакансии, воспользуйтесь [соответствующим методом](#tag/Informaciya-o-rabotodatele/operation/get-employer-vacancy-areas) */
        area?: string;
        /** Идентификатор резюме. Если параметр передан, в ответе возвращаются только те вакансии, которые подходят для указанного резюме, а также дополнительные поля */
        resume_id?: string;
        /** Способ сортировки вакансий. Доступные значения перечислены в поле `employer_active_vacancies_order` в [справочнике полей](#tag/Obshie-spravochniki/operation/get-dictionaries) */
        order_by?: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacanciesVacancyListResponse,
        ErrorsBadRequestVacancyErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/vacancies/active`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет понять, может ли менеджер публиковать вакансии и какие типы вакансий ему доступны. Возвращает все возможные типы публикации
     *
     * @tags Информация о менеджере
     * @name GetAvailableVacancyTypes
     * @summary Варианты публикации вакансий у текущего менеджера
     * @request GET:/employers/{employer_id}/managers/{manager_id}/vacancies/available_types
     * @secure
     */
    getAvailableVacancyTypes: (
      employerId: string,
      managerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesAvailableVacancyTypeResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/managers/${managerId}/vacancies/available_types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить можно только вакансию из архива
     *
     * @tags Управление вакансиями
     * @name AddVacancyToHidden
     * @summary Удаление вакансий
     * @request PUT:/employers/{employer_id}/vacancies/hidden/{vacancy_id}
     * @secure
     */
    addVacancyToHidden: (
      employerId: string,
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/vacancies/hidden/${vacancyId}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Восстановить можно только удаленную из архива вакансию. Вакансия вернется в архив
     *
     * @tags Управление вакансиями
     * @name RestoreVacancyFromHidden
     * @summary Восстановление вакансии из удаленных
     * @request DELETE:/employers/{employer_id}/vacancies/hidden/{vacancy_id}
     * @secure
     */
    restoreVacancyFromHidden: (
      employerId: string,
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/vacancies/hidden/${vacancyId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Управление вакансиями
     * @name GetHiddenVacancies
     * @summary Список удаленных вакансий
     * @request GET:/employers/{employer_id}/vacancies/hidden
     * @secure
     */
    getHiddenVacancies: (
      employerId: string,
      query?: {
        /**
         * Идентификатор менеджера. Передайте, если требуется получить удаленные вакансии другого менеджера.
         * Если передать несколько параметров `manager_id`, будет использоваться только последний.
         * По умолчанию возвращаются вакансии текущего пользователя
         */
        manager_id?: string;
        /** Сортировка списка вакансий в архиве. Справочник с возможными значениями: `employer_hidden_vacancies_order` в [/dictionaries](#tag/Obshie-spravochniki/paths/~1dictionaries/get) */
        order_by?: string;
        /** Количество элементов на странице выдачи. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). Значение по умолчанию и максимальное значение `per_page` составляет 10000 */
        per_page?: number;
        /** Порядковый номер страницы в выдаче. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). По умолчанию нумерация начинается с 0 страницы */
        page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacanciesDeletedVacancyListResponse,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/vacancies/hidden`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Управление вакансиями
     * @name GetArchivedVacancies
     * @summary Список архивных вакансий
     * @request GET:/employers/{employer_id}/vacancies/archived
     * @secure
     */
    getArchivedVacancies: (
      employerId: string,
      query?: {
        /**
         * Идентификатор менеджера. Передайте, если требуется получить вакансии другого менеджера.
         *
         * Если передать несколько параметров `manager_id`, будет использоваться только последний.
         *
         * По умолчанию возвращаются вакансии текущего пользователя
         */
        manager_id?: string;
        /** Сортировка списка вакансий в архиве. Справочник с возможными значениями: `employer_archived_vacancies_order` в [/dictionaries](#tag/Obshie-spravochniki/paths/~1dictionaries/get) */
        order_by?: string;
        /** Количество элементов на странице выдачи. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). Значение по умолчанию и максимальное значение `per_page` составляет 10000 */
        per_page?: number;
        /** Порядковый номер страницы в выдаче. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). По умолчанию нумерация начинается с 0 страницы */
        page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacanciesArchivedVacancyListResponse,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/employers/${employerId}/vacancies/archived`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Переносит вакансию в архив
     *
     * @tags Управление вакансиями
     * @name AddVacancyToArchive
     * @summary Архивация вакансии
     * @request PUT:/employers/{employer_id}/vacancies/archived/{vacancy_id}
     * @secure
     */
    addVacancyToArchive: (
      employerId: string,
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/vacancies/archived/${vacancyId}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает список сохраненных тестов работодателя.
     *
     * @tags Справочники работодателя
     * @name GetTestsDictionary
     * @summary Справочник тестов работодателя
     * @request GET:/employers/{employer_id}/tests
     * @secure
     */
    getTestsDictionary: (
      employerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployerDictionariesTestsResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/employers/${employerId}/tests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  resumeShouldSendSms = {
    /**
     * No description
     *
     * @tags Резюме. Работа с телефоном
     * @name GetApplicantPhoneInfo
     * @summary Получить информацию о телефоне соискателя
     * @request GET:/resume_should_send_sms
     * @secure
     */
    getApplicantPhoneInfo: (
      query: {
        /** Номер телефона в любом формате */
        phone: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ResumeShouldSendSmsContainer, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors>({
        path: `/resume_should_send_sms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  managerAccounts = {
    /**
     * @description Возвращает список рабочих аккаунтов менеджера и информацию об основном и текущем аккаунте. Для работы под определенным аккаунтом необходимо передать значение account_id, полученное из списка, в заголовке: `X-Manager-Account-Id: {account_id}` Использовать данный заголовок можно во всех методах, доступных для работодателей. В заголовке можно передавать account_id основного аккаунта, который также подразумевается по умолчанию, при отсутствии заголовка.
     *
     * @tags Менеджеры работодателя
     * @name GetManagerAccounts
     * @summary Рабочие аккаунты менеджера
     * @request GET:/manager_accounts/mine
     * @secure
     */
    getManagerAccounts: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ManagerAccounts, ErrorsBadAuthorizationErrors>({
        path: `/manager_accounts/mine`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  resumePhoneGenerateCode = {
    /**
     * No description
     *
     * @tags Резюме. Работа с телефоном
     * @name SendCodeForVerifyPhoneInResume
     * @summary Отправить код подтверждения для телефона резюме
     * @request POST:/resume_phone_generate_code
     * @secure
     */
    sendCodeForVerifyPhoneInResume: (
      data: {
        /** Телефон на который надо отправить подтверждающий код */
        phone: string;
      },
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ResumePhoneGenerateCodeGenerateCode, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors>({
        path: `/resume_phone_generate_code`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  webhook = {
    /**
     * @description В рамках одного приложения пользователь может получать уведомления только на 1 url: нельзя подписаться разными действиями на разные урлы. После наступления события будет отправлен POST-запрос на указанный URL c json телом (**см. раздел "Callbacks"**). В ответ на POST-запрос ожидается ответ с кодом `2хх Success`, если сообщение принято, или `409 Conflict`, если пришел дубликат. Для определения дубликатов нужно использовать id из запроса - уникальный идентификатор для пары "пользователь + приложение" в рамках одного типа события в подписке. Дубликаты возможны, если мы не получили ответ из-за проблем с сетью, или не получили ожидаемый ответ. Если в рамках одной подписки ожидаемые ответы не поступают долгое время, на почту разработчика приложения будет отправлено уведомительное письмо, подписка автоматически деактивируется, а отправки прекращаются. При удалении приложения владельцем или отзыве пользователем доступа у приложения все подписки на уведомления удаляются. После восстановления доступа необходимо оформить новую подписку. Вебхуки не являются средствами гарантированной доставки. Мы отправляем все сообщения, но не гарантируем, что адресат их получит.
     *
     * @tags Webhook API
     * @name PostWebhookSubscription
     * @summary Подписаться на уведомления
     * @request POST:/webhook/subscriptions
     * @secure
     */
    postWebhookSubscription: (
      data: WebhookSubscriptionCreate,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<Id, WebhookBadDataError | ErrorsBadAuthorizationErrors>({
        path: `/webhook/subscriptions`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhook API
     * @name GetWebhookSubscriptions
     * @summary Получить список уведомлений, на которые подписан пользователь
     * @request GET:/webhook/subscriptions
     * @secure
     */
    getWebhookSubscriptions: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<WebhookSubscriptionsOutput, ErrorsBadAuthorizationErrors>({
        path: `/webhook/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновить можно как каждое поле по отдельности (в таком случае нужно отправить только обновляемое поле), так и несколько полей одновременно. Для обновления `actions` нужно передать полный список типов событий, по которым будут формироваться уведомления. Переданные типы событий не добавляются к типам событий, на которые пользователь уже подписан. Пустой список `actions` передать нельзя.
     *
     * @tags Webhook API
     * @name ChangeWebhookSubscription
     * @summary Изменить подписку на уведомления
     * @request PUT:/webhook/subscriptions/{subscription_id}
     * @secure
     */
    changeWebhookSubscription: (
      subscriptionId: string,
      data: WebhookSubscriptionUpdate,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadJsonDataErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/webhook/subscriptions/${subscriptionId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhook API
     * @name CancelWebhookSubscription
     * @summary Удалить подписку на уведомление
     * @request DELETE:/webhook/subscriptions/{subscription_id}
     * @secure
     */
    cancelWebhookSubscription: (
      subscriptionId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/webhook/subscriptions/${subscriptionId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),
  };
  educationalInstitutions = {
    /**
     * @description Возвращает список факультетов указанного учебного заведения
     *
     * @tags Общие справочники
     * @name GetFaculties
     * @summary Список факультетов учебного заведения
     * @request GET:/educational_institutions/{id}/faculties
     * @secure
     */
    getFaculties: (
      id: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<DictionariesFacultiesResponse, ErrorsNotFoundErrors>({
        path: `/educational_institutions/${id}/faculties`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Общие справочники
     * @name GetEducationalInstitutionsDictionary
     * @summary Основная информация об учебных заведениях
     * @request GET:/educational_institutions
     * @secure
     */
    getEducationalInstitutionsDictionary: (
      query: {
        /** Идентификаторы учебных заведений. Идентификатор конкретного заведения можно узнать в [подсказке](#tag/Podskazki/operation/get-educational-institutions-suggests). Передать можно не более 50 значений. Например: `?id=39196&id=45470&id=0`. Если был передан идентификатор несуществующего заведения, для него не вернется никакой информации */
        id: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsEducationalInstitutions, ErrorsBadArgumentErrors>({
        path: `/educational_institutions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  professionalRoles = {
    /**
     * @description Возвращает профессиональные роли, их категории и другую информацию о профессиональных ролях. Профессиональные роли приходят на замену [специализациям](https://github.com/hhru/api/blob/master/docs/specializations.md). В настоящее время профессиональные роли и специализации используются параллельно для обеспечения обратной совместимости.
     *
     * @tags Общие справочники
     * @name GetProfessionalRolesDictionary
     * @summary Справочник профессиональных ролей
     * @request GET:/professional_roles
     * @secure
     */
    getProfessionalRolesDictionary: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfessionalRolesCatalog, ErrorsBadArgumentErrors>({
        path: `/professional_roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  languages = {
    /**
     * No description
     *
     * @tags Общие справочники
     * @name GetLanguages
     * @summary Список всех языков
     * @request GET:/languages
     * @secure
     */
    getLanguages: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<DictionariesLangResponse, any>({
        path: `/languages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  dictionaries = {
    /**
     * @description Справочники полей и сущностей, используемых в API. Значения в справочниках могут поменяться в любой момент
     *
     * @tags Общие справочники
     * @name GetDictionaries
     * @summary Справочники полей
     * @request GET:/dictionaries
     * @secure
     */
    getDictionaries: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<DictionariesDictResponse, any>({
        path: `/dictionaries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  industries = {
    /**
     * @description Возвращает двухуровневый справочник всех отраслей
     *
     * @tags Общие справочники
     * @name GetIndustries
     * @summary Отрасли компаний
     * @request GET:/industries
     * @secure
     */
    getIndustries: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<DictionariesIndustriesResponse, any>({
        path: `/industries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  skills = {
    /**
     * @description Метод возвращает информацию по запрашиваемым ключевым навыкам. Значения в справочнике могут поменяться в любой момент
     *
     * @tags Общие справочники
     * @name GetSkills
     * @summary Справочник ключевых навыков
     * @request GET:/skills
     * @secure
     */
    getSkills: (
      query: {
        /** Идентификаторы ключевых навыков. Идентификатор конкретного навыка можно узнать по [подсказке](#tag/Podskazki/operation/get-skill-set-suggests). Передать можно не более 50 значений. Например: `?id=2716&id=3019&id=0`. Если был передан идентификатор несуществующего ключевого навыка, для него не вернется никакой информации */
        id: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<DictionariesSkillsResponse, ErrorsBadArgumentErrors>({
        path: `/skills`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  vacancies = {
    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name CreateVacancyDraft
     * @summary Создание черновика вакансии
     * @request POST:/vacancies/drafts
     * @secure
     */
    createVacancyDraft: (
      data: VacancyDraftVacancyDraftCreate,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacancyDraftDraftResponseSchema,
        ErrorsBadJsonErrors | ErrorsBadAuthorizationErrors | ErrorsDraftError
      >({
        path: `/vacancies/drafts`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name GetVacancyDraftList
     * @summary Получение списка черновиков вакансий
     * @request GET:/vacancies/drafts
     * @secure
     */
    getVacancyDraftList: (
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию - 20, максимальное значение - 50) */
        per_page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacancyDraftVacancyDraftItems, ErrorsBadAuthorizationErrors>({
        path: `/vacancies/drafts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name GetVacancyDraft
     * @summary Получение черновика вакансии
     * @request GET:/vacancies/drafts/{draft_id}
     * @secure
     */
    getVacancyDraft: (
      draftId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacancyDraftVacancyDraftFull, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/drafts/${draftId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name ChangeVacancyDraft
     * @summary Изменение черновика вакансии
     * @request PUT:/vacancies/drafts/{draft_id}
     * @secure
     */
    changeVacancyDraft: (
      draftId: string,
      data: VacancyDraftVacancyDraftCreate,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacancyDraftDraftResponseSchema,
        ErrorsBadJsonErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/vacancies/drafts/${draftId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name DeleteVacancyDraft
     * @summary Удаление черновика вакансии
     * @request DELETE:/vacancies/drafts/{draft_id}
     * @secure
     */
    deleteVacancyDraft: (
      draftId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/drafts/${draftId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name DisableAutomaticVacancyPublication
     * @summary Отмена автопубликации вакансии
     * @request DELETE:/vacancies/auto_publication
     * @secure
     */
    disableAutomaticVacancyPublication: (
      query: {
        /** Идентификатор черновика */
        draft_id: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/auto_publication`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name SearchForVacancyDraftDuplicates
     * @summary Проверка наличия дубликатов вакансии
     * @request GET:/vacancies/drafts/{draft_id}/duplicates
     * @secure
     */
    searchForVacancyDraftDuplicates: (
      draftId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacancyDuplicates, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/drafts/${draftId}/duplicates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Черновики вакансий
     * @name PublishVacancyFromDraft
     * @summary Публикация вакансии на основе черновика
     * @request POST:/vacancies/drafts/{draft_id}/publish
     * @secure
     */
    publishVacancyFromDraft: (
      draftId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacancyDraftVacanciesDraftResponse,
        ErrorsVacancyErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/vacancies/drafts/${draftId}/publish`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Управление вакансиями
     * @name GetProlongationVacancyInfo
     * @summary Информация о возможности продления вакансии
     * @request GET:/vacancies/{vacancy_id}/prolongate
     * @secure
     */
    getProlongationVacancyInfo: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacancyProlongate, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/${vacancyId}/prolongate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Продлевает срок размещения указанной вакансии. Условия продления: * Стоимость продления вакансии равна стоимости новой публикации. * Стандартные вакансии можно продлевать, если с момента предыдущего продления прошло не менее 1 минуты. * Вакансии "стандарт-плюс" можно продлевать не ранее, чем за 7 дней до окончания срока публикации.
     *
     * @tags Управление вакансиями
     * @name VacancyProlongation
     * @summary Продление вакансии
     * @request POST:/vacancies/{vacancy_id}/prolongate
     * @secure
     */
    vacancyProlongation: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsCombinationsBadAuthVacancyProlongate | ErrorsNotFoundErrors>({
        path: `/vacancies/${vacancyId}/prolongate`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает [подмножество вакансий](#tag/Vakansii/operation/get-vacancy), скрытых пользователем, а также один дополнительный параметр
     *
     * @tags Скрытые вакансии
     * @name GetBlacklistedVacancies
     * @summary Список скрытых вакансий
     * @request GET:/vacancies/blacklisted
     * @secure
     */
    getBlacklistedVacancies: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacanciesBlacklistedResponse, ErrorsBadAuthorizationErrors>({
        path: `/vacancies/blacklisted`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Создает новую вакансию с полями, передаваемыми в теле запроса. В соответствии с [законом РФ № 1032-1 от 19.04.1991 в ред. от 02.07.2013 г.](https://hh.ru/article/13967) запрещено размещать информацию, ограничивающую права или устанавливающую преимущества для соискателей по полу, возрасту, семейному положению и другим обстоятельствам, не связанным с деловыми качествами работников. Примечания: * При успешной публикации будут списаны соответствующие услуги. * Все вакансии проходят ручную модерацию. * В течение нескольких минут после публикации вакансия станет доступна в поиске. Полезные ссылки: * [Правила размещения вакансий](https://hh.ru/article/341) * [Как составить хорошее описание вакансии](https://hh.ru/article/16239)
     *
     * @tags Управление вакансиями
     * @name PublishVacancy
     * @summary Публикация вакансии
     * @request POST:/vacancies
     * @secure
     */
    publishVacancy: (
      data: VacancyCreate,
      query?: {
        /** Форсирование добавления дубликатов */
        ignore_duplicates?: boolean;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        IncludesId,
        ErrorsCombinationsBadJsonDataAddEditVacancyError | ErrorsCombinationsBadAuthAddEditVacancyError
      >({
        path: `/vacancies`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Если не передан токен авторизации, то после первого запроса будет предложено пройти капчу. При указании параметров пагинации (`page`, `per_page`) работает ограничение: глубина возвращаемых результатов не может быть больше `2000`. Например, возможен запрос `per_page=10&page=199` (выдача с `1991` по `2000` вакансию), но запрос с `per_page=10&page=200` вернёт ошибку (выдача с `2001` по `2010` вакансию)
     *
     * @tags Поиск вакансий
     * @name GetVacanciesSimilarToVacancy
     * @summary Поиск по вакансиям, похожим на вакансию
     * @request GET:/vacancies/{vacancy_id}/similar_vacancies
     * @secure
     */
    getVacanciesSimilarToVacancy: (
      vacancyId: string,
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию - 10, максимальное значение - 100) */
        per_page?: number;
        /** Переданное значение ищется в полях вакансии, указанных в параметре `search_field`. Доступен [язык запросов](https://hh.ru/article/1175). Специально для этого поля есть [автодополнение](#tag/Podskazki/operation/get-vacancy-search-keywords) */
        text?: string;
        /**
         * Область поиска. Справочник с возможными значениями: `vacancy_search_fields` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * По умолчанию, используются все поля. Можно указать несколько значений
         */
        search_field?: string;
        /** Опыт работы. Необходимо передавать `id` из справочника `experience` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        experience?: string;
        /** Тип занятости. Необходимо передавать `id` из справочника `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        employment?: string;
        /** График работы. Необходимо передавать `id` из справочника `schedule` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        schedule?: string;
        /** Регион. Необходимо передавать `id` из справочника [/areas](https://github.com/hhru/api/blob/master/docs/areas.md). Можно указать несколько значений */
        area?: string;
        /** Ветка или станция метро. Необходимо передавать `id` из справочника [/metro](#tag/Obshie-spravochniki/operation/get-metro-stations). Можно указать несколько значений */
        metro?: string;
        /** Профессиональная область. Необходимо передавать `id` из справочника [/professional_roles](#tag/Obshie-spravochniki/operation/get-professional-roles-dictionary) */
        professional_role?: string;
        /** Индустрия компании, разместившей вакансию. Необходимо передавать `id` из справочника [/industries](#tag/Obshie-spravochniki/operation/get-industries). Можно указать несколько значений */
        industry?: string;
        /** Идентификатор [работодателя](#tag/Rabotodatel). Можно указать несколько значений */
        employer_id?: string;
        /** Код валюты. Справочник с возможными значениями: `currency` (ключ `code`) в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Имеет смысл указывать только совместно с параметром `salary` */
        currency?: string;
        /**
         * Размер заработной платы. Если указано это поле, но не указано `currency`, то для `currency` используется значение RUR.
         * При указании значения будут найдены вакансии, в которых вилка зарплаты близка к указанной в запросе. При этом значения пересчитываются по текущим курсам ЦБ РФ. Например, при указании `salary=100&currency=EUR` будут найдены вакансии, где вилка зарплаты указана в рублях и после пересчёта в Евро близка к 100 EUR.
         * По умолчанию будут также найдены вакансии, в которых вилка зарплаты не указана, чтобы такие вакансии отфильтровать, используйте `only_with_salary=true`
         */
        salary?: number;
        /** Фильтр по меткам вакансий. Необходимо передавать `id` из справочника `vacancy_label` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        label?: string;
        /** Показывать вакансии только с указанием зарплаты. По умолчанию `false` */
        only_with_salary?: boolean;
        /** Количество дней, в пределах которых производится поиск по вакансиям */
        period?: number;
        /**
         * Дата, которая ограничивает снизу диапазон дат публикации вакансий. Нельзя передавать вместе с параметром `period`.
         * Значение указывается в формате `ISO 8601 - YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Указанное значение будет округлено до ближайших пяти минут
         */
        date_from?: string;
        /**
         * Дата, которая ограничивает сверху диапазон дат публикации вакансий. Нельзя передавать вместе с параметром `period`.
         * Значение указывается в формате `ISO 8601 - YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Указанное значение будет округлено до ближайших пяти минут
         */
        date_to?: string;
        /**
         * Верхняя граница широты.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        top_lat?: number;
        /**
         * Нижняя граница широты.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        bottom_lat?: number;
        /**
         * Левая граница долготы.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        left_lng?: number;
        /**
         * Правая граница долготы.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        right_lng?: number;
        /**
         * Сортировка списка вакансий. Справочник с возможными значениями: `vacancy_search_order` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * Если выбрана сортировка по удалённости от гео-точки `distance`, необходимо также задать её координаты: `sort_point_lat`, `sort_point_lng`.
         */
        order_by?: string;
        /** Значение географической широты точки, по расстоянию от которой будут отсортированы вакансии. Необходимо указывать только, если `order_by` установлено в `distance` */
        sort_point_lat?: number;
        /** Значение географической долготы точки, по расстоянию от которой будут отсортированы вакансии. Необходимо указывать только, если `order_by` установлено в `distance` */
        sort_point_lng?: number;
        /** Возвращать ли [кластеры для данного поиска](https://github.com/hhru/api/blob/master/docs/clusters.md). По умолчанию — `false` */
        clusters?: boolean;
        /** Возвращать ли [описание использованных параметров поиска](https://github.com/hhru/api/blob/master/docs/vacancies_search_arguments.md). По умолчанию — `false` */
        describe_arguments?: boolean;
        /**
         * Если значение `true` — автоматическое преобразование вакансий отключено. По умолчанию – false.
         * При включённом автоматическом преобразовании, будет предпринята попытка изменить текстовый запрос пользователя на набор параметров. Например, запрос `text=москва бухгалтер 100500` будет преобразован в `text=бухгалтер&only_with_salary=true&area=1&salary=100500`
         */
        no_magic?: boolean;
        /** Если значение `true` — в сортировке вакансий будет учтены премиум вакансии. Такая сортировка используется на сайте. По умолчанию — false */
        premium?: boolean;
        /** Если значение `true` — дополнительное поле `counters` с количеством откликов для вакансии включено. По-умолчанию — `false` */
        responses_count_enabled?: boolean;
        /**
         * Вакансии для подработки. Возможные значения:
         * * Все элементы из `working_days` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Все элементы из `working_time_intervals` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Все элементы из `working_time_modes` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Элементы `part` или `project` из `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Элемент `accept_temporary`, показывает вакансии только с временным трудоустройством.
         * Можно указать несколько значений
         */
        part_time?: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VacanciesVacanciesResponse,
        ErrorsBadArgumentErrors | ErrorsCaptchaCaptchaErrors | ErrorsNotFoundErrors
      >({
        path: `/vacancies/${vacancyId}/similar_vacancies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет указанную вакансию в [список отобранных вакансий](#tag/Otobrannye-vakansii/operation/get-favorite-vacancies)
     *
     * @tags Отобранные вакансии
     * @name AddVacancyToFavorite
     * @summary Добавление вакансии в список отобранных
     * @request PUT:/vacancies/favorited/{vacancy_id}
     * @secure
     */
    addVacancyToFavorite: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsCombinationsBadAuthVacancyError | ErrorsNotFoundErrors>({
        path: `/vacancies/favorited/${vacancyId}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Удаляет указанную вакансию из [списка отобранных вакансий](#tag/Otobrannye-vakansii/operation/get-favorite-vacancies)
     *
     * @tags Отобранные вакансии
     * @name DeleteVacancyFromFavorite
     * @summary Удаление вакансии из списка отобранных
     * @request DELETE:/vacancies/favorited/{vacancy_id}
     * @secure
     */
    deleteVacancyFromFavorite: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/favorited/${vacancyId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает подробную информацию по указанной вакансии
     *
     * @tags Вакансии
     * @name GetVacancy
     * @summary Просмотр вакансии
     * @request GET:/vacancies/{vacancy_id}
     * @secure
     */
    getVacancy: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacancy, ErrorsCaptchaCaptchaErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/${vacancyId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает статистику за последние пять дней существования вакансии. При этом: * Если вакансия создана менее пяти дней назад, то первой датой в ответе будет дата создания вакансии. Для будущих дат в полях `responses` и `views` вернется `null`. * Если вакансия находится в архиве или удалена, то последней датой будет дата архивации
     *
     * @tags Управление вакансиями
     * @name GetVacancyStats
     * @summary Статистика по вакансии
     * @request GET:/vacancies/{vacancy_id}/stats
     * @secure
     */
    getVacancyStats: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacancyStatsResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/${vacancyId}/stats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список сокращенных резюме соискателей, просмотревших вакансию за последнюю неделю. Список отсортирован по убыванию по дате просмотра. Если у пользователя несколько резюме, то вернется резюме с наиболее поздней датой обновления. В списке `items` не отображаются резюме, которые соискатель удалил или скрыл от работодателя. Но они учитываются при пагинации (`per_page`) и при подсчете найденных резюме (`found`), а в поле `hidden_on_page` показано количество таких пропущенных резюме на странице
     *
     * @tags Вакансии
     * @name GetVacancyVisitors
     * @summary Просмотры вакансии
     * @request GET:/vacancies/{vacancy_id}/visitors
     * @secure
     */
    getVacancyVisitors: (
      vacancyId: string,
      query?: {
        /** Номер страницы (считается от 0, по умолчанию — 0) */
        page?: number;
        /** Количество элементов (по умолчанию — 20, максимальное значение — 50) */
        per_page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVisitorsResponse, ErrorsBadArgumentErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/${vacancyId}/visitors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Управление вакансиями
     * @name GetVacancyUpgradeList
     * @summary Список улучшений для вакансии
     * @request GET:/vacancies/{vacancy_id}/upgrades
     * @secure
     */
    getVacancyUpgradeList: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacancyUpgradeListResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/vacancies/${vacancyId}/upgrades`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет указанную вакансию в [список скрытых вакансий](#tag/Skrytye-vakansii/operation/get-blacklisted-vacancies)
     *
     * @tags Скрытые вакансии
     * @name AddVacancyToBlacklisted
     * @summary Добавление вакансии в список скрытых
     * @request PUT:/vacancies/blacklisted/{vacancy_id}
     * @secure
     */
    addVacancyToBlacklisted: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        ErrorsBadArgumentVacancyErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundVacancyBlacklistedErrors
      >({
        path: `/vacancies/blacklisted/${vacancyId}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Удаляет указанную вакансию из [списка скрытых вакансий](#tag/Skrytye-vakansii/operation/get-blacklisted-vacancies)
     *
     * @tags Скрытые вакансии
     * @name DeleteVacancyFromBlacklisted
     * @summary Удаление вакансии из списка скрытых
     * @request DELETE:/vacancies/blacklisted/{vacancy_id}
     * @secure
     */
    deleteVacancyFromBlacklisted: (
      vacancyId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundVacancyBlacklistedErrors>({
        path: `/vacancies/blacklisted/${vacancyId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает [подмножество вакансий](#tag/Vakansii/operation/get-vacancy), добавленных пользователем в отобранные, а также ряд дополнительных полей
     *
     * @tags Отобранные вакансии
     * @name GetFavoriteVacancies
     * @summary Список отобранных вакансий
     * @request GET:/vacancies/favorited
     * @secure
     */
    getFavoriteVacancies: (
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов на странице */
        per_page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacanciesFavoritedResponse, ErrorsBadAuthorizationErrors>({
        path: `/vacancies/favorited`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  locales = {
    /**
     * @description Возвращает справочник возможных локалей резюме. Подколлекция [справочника локалей](#tag/Spravochniki/operation/get-locales). Изменив локаль, можно, например, создать резюме на английском языке.
     *
     * @tags Общие справочники
     * @name GetLocalesForResume
     * @summary Список доступных локалей для резюме
     * @request GET:/locales/resume
     * @secure
     */
    getLocalesForResume: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<LocalesResponse, any>({
        path: `/locales/resume`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список возможных значений (доступных локалей) в поле `id`. Список локалей будет зависеть от указанного сайта (параметр `host`). В любом запросе к API можно указывать параметр `?locale=` для передачи значения локали (языка).
     *
     * @tags Общие справочники
     * @name GetLocales
     * @summary Список доступных локалей
     * @request GET:/locales
     * @secure
     */
    getLocales: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<LocalesResponse, any>({
        path: `/locales`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  savedSearches = {
    /**
     * No description
     *
     * @tags Сохраненные поиски вакансий
     * @name GetSavedVacancySearch
     * @summary Получение единичного сохраненного поиска вакансий
     * @request GET:/saved_searches/vacancies/{id}
     * @secure
     */
    getSavedVacancySearch: (
      id: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SavedSearchesSavedSearchItem, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/saved_searches/vacancies/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description У сохраненного поиска можно изменить имя (`name`) и статус подписки (`subscription`). В одном запросе можно передать только один из параметров
     *
     * @tags Сохраненные поиски вакансий
     * @name UpdateSavedVacancySearch
     * @summary Обновление сохраненного поиска вакансий
     * @request PUT:/saved_searches/vacancies/{id}
     * @secure
     */
    updateSavedVacancySearch: (
      id: string,
      query?: {
        /** Новое имя сохраненного поиска */
        name?: string;
        /** Статус подписки */
        subscription?: boolean;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors | ErrorsConflictBothChangedErrors
      >({
        path: `/saved_searches/vacancies/${id}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Сохраненные поиски вакансий
     * @name DeleteSavedVacancySearch
     * @summary Удаление сохраненного поиска вакансий
     * @request DELETE:/saved_searches/vacancies/{id}
     * @secure
     */
    deleteSavedVacancySearch: (
      id: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/saved_searches/vacancies/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Сохраненные поиски вакансий
     * @name GetSavedVacancySearches
     * @summary Список сохраненных поисков вакансий
     * @request GET:/saved_searches/vacancies
     * @secure
     */
    getSavedVacancySearches: (
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию - 10, максимальное значение - 10) */
        per_page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SavedSearchesSavedSearchResponse, ErrorsBadAuthorizationErrors>({
        path: `/saved_searches/vacancies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Некоторые параметры принимают множественные значения: `key=value&key=value`. При указании параметров пагинации (`page`, `per_page`) работает ограничение: глубина возвращаемых результатов не может быть больше 2000. Например, возможен запрос `per_page=10&page=199` (выдача с 1991 по 2000 вакансию), но запрос с `per_page=10&page=200` вернёт ошибку (выдача с 2001 до 2010 вакансию)
     *
     * @tags Сохраненные поиски вакансий
     * @name CreateSavedVacancySearch
     * @summary Создание нового сохраненного поиска вакансий
     * @request POST:/saved_searches/vacancies
     * @secure
     */
    createSavedVacancySearch: (
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию - 10, максимальное значение - 100) */
        per_page?: number;
        /** Переданное значение ищется в полях вакансии, указанных в параметре `search_field`. Доступен [язык запросов](https://hh.ru/article/1175). Специально для этого поля есть [автодополнение](#tag/Podskazki/operation/get-vacancy-search-keywords) */
        text?: string;
        /**
         * Область поиска. Справочник с возможными значениями: `vacancy_search_fields` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * По умолчанию, используются все поля. Можно указать несколько значений
         */
        search_field?: string;
        /** Опыт работы. Необходимо передавать `id` из справочника `experience` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        experience?: string;
        /** Тип занятости. Необходимо передавать `id` из справочника `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        employment?: string;
        /** График работы. Необходимо передавать `id` из справочника `schedule` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        schedule?: string;
        /** Регион. Необходимо передавать `id` из справочника [/areas](https://github.com/hhru/api/blob/master/docs/areas.md). Можно указать несколько значений */
        area?: string;
        /** Ветка или станция метро. Необходимо передавать `id` из справочника [/metro](#tag/Obshie-spravochniki/operation/get-metro-stations). Можно указать несколько значений */
        metro?: string;
        /** Профессиональная область. Необходимо передавать `id` из справочника [/professional_roles](#tag/Obshie-spravochniki/operation/get-professional-roles-dictionary) */
        professional_role?: string;
        /** Индустрия компании, разместившей вакансию. Необходимо передавать `id` из справочника [/industries](#tag/Obshie-spravochniki/operation/get-industries). Можно указать несколько значений */
        industry?: string;
        /** Идентификатор [работодателя](#tag/Rabotodatel). Можно указать несколько значений */
        employer_id?: string;
        /** Код валюты. Справочник с возможными значениями: `currency` (ключ `code`) в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Имеет смысл указывать только совместно с параметром `salary` */
        currency?: string;
        /**
         * Размер заработной платы. Если указано это поле, но не указано `currency`, то для `currency` используется значение RUR.
         *
         * При указании значения будут найдены вакансии, в которых вилка зарплаты близка к указанной в запросе. При этом значения пересчитываются по текущим курсам ЦБ РФ. Например, при указании `salary=100&currency=EUR` будут найдены вакансии, где вилка зарплаты указана в рублях и после пересчёта в Евро близка к 100 EUR.
         *
         * По умолчанию будут также найдены вакансии, в которых вилка зарплаты не указана, чтобы такие вакансии отфильтровать, используйте `only_with_salary=true`
         */
        salary?: number;
        /** Фильтр по меткам вакансий. Необходимо передавать `id` из справочника `vacancy_label` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        label?: string;
        /** Показывать вакансии только с указанием зарплаты. По умолчанию `false` */
        only_with_salary?: boolean;
        /** Количество дней, в пределах которых производится поиск по вакансиям */
        period?: number;
        /**
         * Дата, которая ограничивает снизу диапазон дат публикации вакансий. Нельзя передавать вместе с параметром `period`.
         *
         * Значение указывается в формате `ISO 8601 - YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Указанное значение будет округлено до ближайших пяти минут
         */
        date_from?: string;
        /**
         * Дата, которая ограничивает сверху диапазон дат публикации вакансий. Нельзя передавать вместе с параметром `period`.
         *
         * Значение указывается в формате `ISO 8601 - YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Указанное значение будет округлено до ближайших пяти минут
         */
        date_to?: string;
        /**
         * Верхняя граница широты.
         *
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         *
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        top_lat?: number;
        /**
         * Нижняя граница широты.
         *
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         *
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        bottom_lat?: number;
        /**
         * Левая граница долготы.
         *
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         *
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        left_lng?: number;
        /**
         * Правая граница долготы.
         *
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         *
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        right_lng?: number;
        /**
         * Сортировка списка вакансий. Справочник с возможными значениями: `vacancy_search_order` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         *
         * Если выбрана сортировка по удалённости от гео-точки `distance`, необходимо также задать её координаты: `sort_point_lat`, `sort_point_lng`.
         */
        order_by?: string;
        /** Значение географической широты точки, по расстоянию от которой будут отсортированы вакансии. Необходимо указывать только, если `order_by` установлено в `distance` */
        sort_point_lat?: number;
        /** Значение географической долготы точки, по расстоянию от которой будут отсортированы вакансии. Необходимо указывать только, если `order_by` установлено в `distance` */
        sort_point_lng?: number;
        /** Возвращать ли [кластеры для данного поиска](https://github.com/hhru/api/blob/master/docs/clusters.md). По умолчанию — `false` */
        clusters?: boolean;
        /** Возвращать ли [описание использованных параметров поиска](https://github.com/hhru/api/blob/master/docs/vacancies_search_arguments.md). По умолчанию — `false` */
        describe_arguments?: boolean;
        /**
         * Если значение `true` — автоматическое преобразование вакансий отключено. По умолчанию – false.
         *
         * При включённом автоматическом преобразовании, будет предпринята попытка изменить текстовый запрос пользователя на набор параметров. Например, запрос `text=москва бухгалтер 100500` будет преобразован в `text=бухгалтер&only_with_salary=true&area=1&salary=100500`
         */
        no_magic?: boolean;
        /** Если значение `true` — в сортировке вакансий будет учтены премиум вакансии. Такая сортировка используется на сайте. По умолчанию — false */
        premium?: boolean;
        /** Если значение `true` — дополнительное поле `counters` с количеством откликов для вакансии включено. По-умолчанию — `false` */
        responses_count_enabled?: boolean;
        /**
         * Вакансии для подработки. Возможные значения:
         *
         * * Все элементы из `working_days` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Все элементы из `working_time_intervals` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Все элементы из `working_time_modes` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Элементы `part` или `project` из `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Элемент `accept_temporary`, показывает вакансии только с временным трудоустройством.
         *
         * Можно указать несколько значений
         */
        part_time?: boolean;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacancyName, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors>({
        path: `/saved_searches/vacancies`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Сохраненные поиски резюме
     * @name GetSavedResumeSearches
     * @summary Список сохраненных поисков резюме
     * @request GET:/saved_searches/resumes
     * @secure
     */
    getSavedResumeSearches: (
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию - 5, максимальное значение - 10) */
        per_page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SavedSearchesSavedSearchResponse, ErrorsBadAuthorizationErrors>({
        path: `/saved_searches/resumes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Некоторые параметры принимают множественные значения: `key=value&key=value`. При указании параметров пагинации (`page`, `per_page`) работает ограничение: глубина возвращаемых результатов не может быть больше 2000. Например, возможен запрос `per_page=10&page=199` (выдача с 1991 по 2000 вакансию), но запрос с `per_page=10&page=200` вернёт ошибку (выдача с 2001 до 2010 вакансию)
     *
     * @tags Сохраненные поиски резюме
     * @name CreateSavedResumeSearch
     * @summary Создание нового сохраненного поиска резюме
     * @request POST:/saved_searches/resumes
     * @secure
     */
    createSavedResumeSearch: (
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию — 10, максимальное значение — 50) */
        per_page?: number;
        /**
         * Поисковая фраза. Найдет резюме, в которых встречаются все слова заданной фразы. Можно указать несколько значений.
         *
         * Каждый дополнительный `text` уточняет поиск. В качестве поисковой фразы можно использовать [язык поисковых запросов](http://hh.ru/article.xml?articleId=1175). Специально для этого поля есть [автодополнение](#tag/Podskazki/operation/get-resume-search-keywords-suggests).
         *
         * Для тонкой настройки по фразе можно использовать параметры `text.logic`, `text.field`, `text.period`. При использовании дополнительных `text.*` полей, необходимо указывать весь набор (триаду) параметров
         */
        text?: string;
        /** Описывает, как производится поиск. Справочник с возможными значениями: `resume_search_logic` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries) */
        "text.logic"?: string;
        /**
         * Описывает, где должны встречаться слова из поисковой фразы `text`.
         *
         * В параметре `text.field` можно указать несколько значений через запятую, например — `?text.field=education,keywords`. Справочник с возможными значениями: `resume_search_fields` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries)
         */
        "text.field"?: string;
        /**
         * Период опыта работы.
         *
         * Параметр имеет смысл только при `text.field` равным одному из значений: `experience`, `experience_company`, `experience_position`, `experience_description`, но указывать его необходимо всегда при указании других `text.*`. Если параметр не имеет смысла, то его значение можно оставить пустым
         */
        "text.period"?: string;
        /**
         * Минимальный возраст соискателя в годах.
         *
         * По умолчанию в выдачу добавляются также резюме с неуказанным возрастом, для выдачи резюме только с указанным возрастом используйте специальный [label](https://github.com/hhru/api/blob/master/docs/resumes_search.md#resume_search_label) "only_with_age"
         */
        age_from?: number;
        /**
         * Максимальный возраст соискателя в годах.
         *
         * По умолчанию в выдачу добавляются также резюме с неуказанным возрастом, для выдачи резюме только с указанным возрастом используйте специальный [label](https://github.com/hhru/api/blob/master/docs/resumes_search.md#resume_search_label) "only_with_age"
         */
        age_to?: number;
        /**
         * Регион. Справочник с возможными значениями: [/areas](https://github.com/hhru/api/blob/master/docs/areas.md). Можно указать несколько значений.
         *
         * По умолчанию выбираются резюме, в которых соискатели живут в указанных регионах или готовы в них переехать. Поменять это поведение поиска можно указанием поля `relocation`.
         */
        area?: string;
        /** Готовность к переезду. Справочник с возможными значениями: `resume_search_relocation` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Необходимо указывать вместе с параметром `area` */
        relocation?: string;
        /** В днях, ищет резюме опубликованные за указанный период. Если не указан, поиск ведется без ограничений по дате публикации */
        period?: number;
        /** Дата, от которой нужно начать поиск. Значение указывается в формате [ISO 8601](https://github.com/hhru/api/blob/master/docs/general.md#date-format) — `YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Нельзя передавать вместе с параметром `period` */
        date_from?: string;
        /** Дата, до которой нужно искать. Значение указывается в формате [ISO 8601](https://github.com/hhru/api/blob/master/docs/general.md#date-format) — `YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Можно передавать только в паре с параметром `date_from`. Нельзя передавать вместе с параметром `period` */
        date_to?: string;
        /** Уровень образования. Справочник с возможными значениями: `education_level` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Если не указан, поиск ведется без ограничений на уровень образования */
        education_level?: string;
        /** Тип занятости. Справочник с возможными значениями: `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        employment?: string;
        /** Опыт работы. Справочник с возможными значениями: `experience` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries) */
        experience?: string;
        /** Ключевые навыки. Указывается один или несколько идентификаторов ключевых навыков. Значения можно получить из поля `id` в [подсказке по ключевым навыкам](#tag/Podskazki/operation/get-skill-set-suggests). */
        skill?: string;
        /**
         * Пол соискателя. Справочник с возможными значениями: `gender` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         *
         * По умолчанию вне зависимости от значения параметра будут найдены резюме, в которых пол не указан, убрать такие резюме можно с помощью `label=only_with_gender`
         */
        gender?: string;
        /** Дополнительный фильтр. Справочник с возможными значениями: `resume_search_label` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        label?: string;
        /**
         * Знание языка. Можно указать несколько значений
         *
         * Значения из справочника [/languages](#tag/Obshie-spravochniki/operation/get-languages)
         */
        language?: string;
        /**
         * Уровень знания языка. Можно указать несколько значений
         *
         * Значения из справочника `language_level` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries)
         */
        "language.level"?: string;
        /** Линия, либо станция метро. Справочник с возможными значениями: [/metro](#tag/Obshie-spravochniki/operation/get-metro-stations) */
        metro?: string;
        /** Код валюты. Справочник с возможными значениями: `currency` (ключ `code`) в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries) */
        currency?: string;
        /**
         * Нижняя граница желаемой заработной платы (ЗП).
         *
         * По умолчанию в выдачу добавляются также резюме с неуказанной ЗП, для выдачи резюме только с указанной ЗП используйте специальный [label](https://github.com/hhru/api/blob/master/docs/resumes_search.md#resume_search_label) "only_with_salary"
         */
        salary_from?: number;
        /**
         * Верхняя граница желаемой заработной платы (ЗП).
         *
         * По умолчанию в выдачу добавляются также резюме с неуказанной ЗП, для выдачи резюме только с указанной ЗП используйте специальный [label](https://github.com/hhru/api/blob/master/docs/resumes_search.md#resume_search_label) "only_with_salary"
         */
        salary_to?: number;
        /** График работы. Справочник с возможными значениями: `schedule` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        schedule?: string;
        /** Сортировка списка резюме. Справочник с возможными значениями: `resume_search_order` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). */
        order_by?: string;
        /** Страна желаемого гражданства. Возможные значения можно посмотреть в [справочнике стран](https://github.com/hhru/api/blob/master/docs/areas.md#%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-%D1%81%D1%82%D1%80%D0%B0%D0%BD). Можно указать несколько значений */
        citizenship?: string;
        /** Страна, в которой есть разрешение на работу. Возможные значения можно посмотреть в [справочнике стран](https://github.com/hhru/api/blob/master/docs/areas.md#%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-%D1%81%D1%82%D1%80%D0%B0%D0%BD). Можно указать несколько значений */
        work_ticket?: string;
        /** Учебные заведения соискателя. В качестве параметров используются подсказки по названиям университетов [/suggests/educational_institutions](#tag/Podskazki). Можно указать несколько значений */
        educational_institution?: string;
        /** Если `true`, то поиск осуществляется только по резюме, которыми соискатели откликались на вакансии компании текущего пользователя, если `false` — поиск осуществляется по всем резюме. По умолчанию — `false` */
        search_in_responses?: boolean;
        /** Если `true`, включается поиск по префиксу. Для каждого параметра `text` будут находиться не только полные совпадения слов, но еще и слова, начинающиеся с `text`. По умолчанию — `false` */
        by_text_prefix?: boolean;
        /** Категории водительских прав. Справочник с возможными значениями: `driver_license_types` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries) */
        driver_license_types?: string;
        /** Идентификатор вакансии для поиска похожих резюме. Необходимо передавать идентификатор активной или архивной вакансии работодателя */
        vacancy_id?: string;
        /** Профессиональная роль. Элемент справочника [professional_roles](#tag/Obshie-spravochniki/operation/get-professional-roles-dictionary). Можно указать несколько значений. */
        professional_role?: string;
        /** Один или несколько идентификаторов папок с отобранными резюме. Если данный параметр передан, поиск будет ограничен содержимым указанных папок. Можно передавать идентификаторы нескольких папок, например: `folder=111&folder=222&folder=333` */
        folder?: string;
        /** Признак, указывающий, нужно ли вести поиск по всем папкам с отобранными резюме. Если у менеджера есть доступ к избранным папкам, то поиск проходит по умолчанию в избранных папках. Если передать параметр `false`, то поиск не будет ограничен папками. Если будут переданы параметры `folder` и `include_all_folders` в одном запросе, вернется ошибка `400 Bad Request` */
        include_all_folders?: boolean;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacancyName, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors>({
        path: `/saved_searches/resumes`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Сохраненные поиски резюме
     * @name MoveSavedResumeSearch
     * @summary Передача сохраненного поиска резюме другому менеджеру
     * @request PUT:/saved_searches/resumes/{saved_search_id}/managers/{manager_id}
     * @secure
     */
    moveSavedResumeSearch: (
      savedSearchId: string,
      managerId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationSavedSearchErrors | ErrorsNotFoundSavedSearchErrors>({
        path: `/saved_searches/resumes/${savedSearchId}/managers/${managerId}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Сохраненные поиски резюме
     * @name GetSavedResumeSearch
     * @summary Получение единичного сохраненного поиска резюме
     * @request GET:/saved_searches/resumes/{id}
     * @secure
     */
    getSavedResumeSearch: (
      id: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SavedSearchesSavedSearchItem, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/saved_searches/resumes/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description У сохраненного поиска можно изменить имя (`name`) и статус подписки (`subscription`). В одном запросе можно передать только один из параметров
     *
     * @tags Сохраненные поиски резюме
     * @name UpdateSavedResumeSearch
     * @summary Обновление сохраненного поиска резюме
     * @request PUT:/saved_searches/resumes/{id}
     * @secure
     */
    updateSavedResumeSearch: (
      id: string,
      query?: {
        /** Новое имя сохраненного поиска */
        name?: string;
        /** Статус подписки */
        subscription?: boolean;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors | ErrorsConflictBothChangedErrors
      >({
        path: `/saved_searches/resumes/${id}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Сохраненные поиски резюме
     * @name DeleteSavedResumeSearch
     * @summary Удаление сохраненного поиска резюме
     * @request DELETE:/saved_searches/resumes/{id}
     * @secure
     */
    deleteSavedResumeSearch: (
      id: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/saved_searches/resumes/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),
  };
  resumes = {
    /**
     * @description Данные доступны только автору резюме. При указании параметров пагинации (`page`, `per_page`) работает ограничение: глубина возвращаемых результатов не может быть больше `2000`. Например, возможен запрос `per_page=10&page=199` (выдача с `1991` по `2000` вакансию), но запрос с `per_page=10&page=200` вернёт ошибку (выдача с `2001` по `2010` вакансию)
     *
     * @tags Поиск вакансий для соискателя
     * @name GetVacanciesSimilarToResume
     * @summary Поиск по вакансиям, похожим на резюме
     * @request GET:/resumes/{resume_id}/similar_vacancies
     * @secure
     */
    getVacanciesSimilarToResume: (
      resumeId: string,
      query?: {
        /** Номер страницы (считается от 0, по умолчанию - 0) */
        page?: number;
        /** Количество элементов (по умолчанию - 10, максимальное значение - 100) */
        per_page?: number;
        /** Переданное значение ищется в полях вакансии, указанных в параметре `search_field`. Доступен [язык запросов](https://hh.ru/article/1175). Специально для этого поля есть [автодополнение](#tag/Podskazki/operation/get-vacancy-search-keywords) */
        text?: string;
        /**
         * Область поиска. Справочник с возможными значениями: `vacancy_search_fields` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * По умолчанию, используются все поля. Можно указать несколько значений
         */
        search_field?: string;
        /** Опыт работы. Необходимо передавать `id` из справочника `experience` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        experience?: string;
        /** Тип занятости. Необходимо передавать `id` из справочника `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        employment?: string;
        /** График работы. Необходимо передавать `id` из справочника `schedule` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        schedule?: string;
        /** Регион. Необходимо передавать `id` из справочника [/areas](https://github.com/hhru/api/blob/master/docs/areas.md). Можно указать несколько значений */
        area?: string;
        /** Ветка или станция метро. Необходимо передавать `id` из справочника [/metro](#tag/Obshie-spravochniki/operation/get-metro-stations). Можно указать несколько значений */
        metro?: string;
        /** Профессиональная область. Необходимо передавать `id` из справочника [/professional_roles](#tag/Obshie-spravochniki/operation/get-professional-roles-dictionary) */
        professional_role?: string;
        /** Индустрия компании, разместившей вакансию. Необходимо передавать `id` из справочника [/industries](#tag/Obshie-spravochniki/operation/get-industries). Можно указать несколько значений */
        industry?: string;
        /** Идентификатор [работодателя](#tag/Rabotodatel). Можно указать несколько значений */
        employer_id?: string;
        /** Код валюты. Справочник с возможными значениями: `currency` (ключ `code`) в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Имеет смысл указывать только совместно с параметром `salary` */
        currency?: string;
        /**
         * Размер заработной платы. Если указано это поле, но не указано `currency`, то для `currency` используется значение RUR.
         * При указании значения будут найдены вакансии, в которых вилка зарплаты близка к указанной в запросе. При этом значения пересчитываются по текущим курсам ЦБ РФ. Например, при указании `salary=100&currency=EUR` будут найдены вакансии, где вилка зарплаты указана в рублях и после пересчёта в Евро близка к 100 EUR.
         * По умолчанию будут также найдены вакансии, в которых вилка зарплаты не указана, чтобы такие вакансии отфильтровать, используйте `only_with_salary=true`
         */
        salary?: number;
        /** Фильтр по меткам вакансий. Необходимо передавать `id` из справочника `vacancy_label` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries). Можно указать несколько значений */
        label?: string;
        /** Показывать вакансии только с указанием зарплаты. По умолчанию `false` */
        only_with_salary?: boolean;
        /** Количество дней, в пределах которых производится поиск по вакансиям */
        period?: number;
        /**
         * Дата, которая ограничивает снизу диапазон дат публикации вакансий. Нельзя передавать вместе с параметром `period`.
         * Значение указывается в формате `ISO 8601 - YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Указанное значение будет округлено до ближайших пяти минут
         */
        date_from?: string;
        /**
         * Дата, которая ограничивает сверху диапазон дат публикации вакансий. Нельзя передавать вместе с параметром `period`.
         * Значение указывается в формате `ISO 8601 - YYYY-MM-DD` или с точность до секунды `YYYY-MM-DDThh:mm:ss±hhmm`. Указанное значение будет округлено до ближайших пяти минут
         */
        date_to?: string;
        /**
         * Верхняя граница широты.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        top_lat?: number;
        /**
         * Нижняя граница широты.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        bottom_lat?: number;
        /**
         * Левая граница долготы.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        left_lng?: number;
        /**
         * Правая граница долготы.
         * При поиске используется значение указанного в вакансии адреса. Принимаемое значение — градусы в виде десятичной дроби.
         * Необходимо передавать одновременно все четыре параметра гео-координат, иначе вернется ошибка
         */
        right_lng?: number;
        /**
         * Сортировка списка вакансий. Справочник с возможными значениями: `vacancy_search_order` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * Если выбрана сортировка по удалённости от гео-точки `distance`, необходимо также задать её координаты: `sort_point_lat`, `sort_point_lng`.
         */
        order_by?: string;
        /** Значение географической широты точки, по расстоянию от которой будут отсортированы вакансии. Необходимо указывать только, если `order_by` установлено в `distance` */
        sort_point_lat?: number;
        /** Значение географической долготы точки, по расстоянию от которой будут отсортированы вакансии. Необходимо указывать только, если `order_by` установлено в `distance` */
        sort_point_lng?: number;
        /** Возвращать ли [кластеры для данного поиска](https://github.com/hhru/api/blob/master/docs/clusters.md). По умолчанию — `false` */
        clusters?: boolean;
        /** Возвращать ли [описание использованных параметров поиска](https://github.com/hhru/api/blob/master/docs/vacancies_search_arguments.md). По умолчанию — `false` */
        describe_arguments?: boolean;
        /**
         * Если значение `true` — автоматическое преобразование вакансий отключено. По умолчанию – false.
         * При включённом автоматическом преобразовании, будет предпринята попытка изменить текстовый запрос пользователя на набор параметров. Например, запрос `text=москва бухгалтер 100500` будет преобразован в `text=бухгалтер&only_with_salary=true&area=1&salary=100500`
         */
        no_magic?: boolean;
        /** Если значение `true` — в сортировке вакансий будет учтены премиум вакансии. Такая сортировка используется на сайте. По умолчанию — false */
        premium?: boolean;
        /** Если значение `true` — дополнительное поле `counters` с количеством откликов для вакансии включено. По-умолчанию — `false` */
        responses_count_enabled?: boolean;
        /**
         * Вакансии для подработки. Возможные значения:
         * * Все элементы из `working_days` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Все элементы из `working_time_intervals` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Все элементы из `working_time_modes` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Элементы `part` или `project` из `employment` в [/dictionaries](#tag/Obshie-spravochniki/operation/get-dictionaries).
         * * Элемент `accept_temporary`, показывает вакансии только с временным трудоустройством.
         * Можно указать несколько значений
         */
        part_time?: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacanciesResponse, ErrorsBadArgumentErrors | ErrorsNotFoundErrors>({
        path: `/resumes/${resumeId}/similar_vacancies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает последние действия с указанным резюме, ограниченные 30-ю вакансиями данного работодателя, и 10-ю изменениями состояний откликов/приглашений по каждой из этих вакансий. Метод требует наличия [платного доступа для работодателя](https://github.com/hhru/api/blob/master/docs/payable/employer_methods.md)
     *
     * @tags Отклики/приглашения работодателя
     * @name GetResumeNegotiationsHistory
     * @summary История откликов/приглашений по резюме
     * @request GET:/resumes/{resume_id}/negotiations_history
     * @secure
     */
    getResumeNegotiationsHistory: (
      resumeId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ResumesResumeNegotiationsHistoryResponse, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/resumes/${resumeId}/negotiations_history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление из списка идемпотентно, то есть удаление отсутствующих в списке или несуществующих работодателей игнорируется и не приводит к ошибкам. Можно удалить из списка заблокированного работодателя. За один запрос можно удалить не более 100 компаний
     *
     * @tags Резюме. Списки видимости
     * @name DeleteEmployerFromResumeVisibilityList
     * @summary Удаление работодателя из списка видимости
     * @request DELETE:/resumes/{resume_id}/{list_type}/employer
     * @secure
     */
    deleteEmployerFromResumeVisibilityList: (
      resumeId: string,
      listType: string,
      query: {
        /** Идентификатор работодателя. Множественный параметр */
        id: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadArgumentResumeVisibilityErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/resumes/${resumeId}/${listType}/employer`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает список работодателей, для которых резюме должно быть видимо или скрыто
     *
     * @tags Резюме. Списки видимости
     * @name GetResumeVisibilityList
     * @summary Получение списка видимости резюме
     * @request GET:/resumes/{resume_id}/{list_type}
     * @secure
     */
    getResumeVisibilityList: (
      resumeId: string,
      listType: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResumesGetResumeVisibilityListResponse,
        ErrorsBadArgumentResumeVisibilityErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/resumes/${resumeId}/${listType}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет указанных работодателей в список видимости указанного типа. За один запрос можно добавить не больше 100 компаний. Добавление в список идемпотентно, то есть добавление работодателей, уже присутствующих в списке, игнорируется и не приводит к дублированию записей. Можно добавить в список заблокированного работодателя
     *
     * @tags Резюме. Списки видимости
     * @name AddResumeVisibilityList
     * @summary Добавление работодателей в список видимости
     * @request POST:/resumes/{resume_id}/{list_type}
     * @secure
     */
    addResumeVisibilityList: (
      resumeId: string,
      listType: string,
      data: ResumesPostResumeVisibilityListBody,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        ErrorsCombinationsResumeVisibilityErrorsBadRequest | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/resumes/${resumeId}/${listType}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Резюме. Списки видимости
     * @name DeleteResumeVisibilityList
     * @summary Очистка списка видимости
     * @request DELETE:/resumes/{resume_id}/{list_type}
     * @secure
     */
    deleteResumeVisibilityList: (
      resumeId: string,
      listType: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/resumes/${resumeId}/${listType}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает результаты поиска работодателей
     *
     * @tags Резюме. Списки видимости
     * @name GetResumeVisibilityEmployersList
     * @summary Поиск работодателей для добавления в список видимости
     * @request GET:/resumes/{resume_id}/{list_type}/search
     * @secure
     */
    getResumeVisibilityEmployersList: (
      resumeId: string,
      listType: string,
      query: {
        /** Строка для поиска. Переданное значение ищется в начале названия работодателя и в начале названия департаментов работодателя */
        text: string;
        /** Количество элементов на странице выдачи. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). Значение по умолчанию и максимальное значение per_page составляет 100. */
        per_page?: number;
        /** Порядковый номер страницы в выдаче. Поддерживаются [стандартные параметры пагинации](https://github.com/hhru/api/blob/master/docs/general.md#pagination). По умолчанию нумерация начинается с 0 страницы. */
        page?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResumesResumeVisibilityListSearchResponse,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/resumes/${resumeId}/${listType}/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  vacancyConditions = {
    /**
     * No description
     *
     * @tags Управление вакансиями
     * @name GetVacancyConditions
     * @summary Условия заполнения полей при добавлении и редактировании вакансий
     * @request GET:/vacancy_conditions
     * @secure
     */
    getVacancyConditions: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<VacanciesVacancyConditions, ErrorsBadAuthorizationErrors>({
        path: `/vacancy_conditions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  userStatuses = {
    /**
     * @description Возвращает список доступных статусов поиска соискателя в разных форматах. Deprecated - будет удален, используйте [справочник полей](#tag/Obshie-spravochniki/operation/get-dictionaries)
     *
     * @tags Общие справочники, Соискательские статусы
     * @name GetAvailableUserStatuses
     * @summary Справочник доступных пользовательских статусов
     * @request GET:/user_statuses/available
     * @deprecated
     * @secure
     */
    getAvailableUserStatuses: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<UserStatusesAvailable, ErrorsBadAuthorizationErrors>({
        path: `/user_statuses/available`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  metro = {
    /**
     * No description
     *
     * @tags Общие справочники
     * @name GetMetroStations
     * @summary Список станций метро во всех городах
     * @request GET:/metro
     * @secure
     */
    getMetroStations: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<MetroMetroResponse, any>({
        path: `/metro`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Общие справочники
     * @name GetMetroStationsInCity
     * @summary Список станций метро в указанном городе
     * @request GET:/metro/{city_id}
     * @secure
     */
    getMetroStationsInCity: (
      cityId: number,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<MetroCityMetroItem, ErrorsNotFoundErrors>({
        path: `/metro/${cityId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  artifacts = {
    /**
     * @description Запрос загружает файл с локальной машины в сервис. Ограничения на типы файлов и их размер доступны в [условиях загрузки артефактов](#tag/Rabota-s-artefaktami). Для прикрепления загруженных изображений в резюме, необходимо передать `id` артефакта в [соответствующее поле резюме](https://github.com/hhru/api/blob/master/docs/employer_resumes.md#resume-fields). Для удаления артефакта из резюме укажите `null`
     *
     * @tags Работа с артефактами
     * @name LoadArtifact
     * @summary Загрузка артефакта
     * @request POST:/artifacts
     * @secure
     */
    loadArtifact: (
      data: ArtifactsArtifactUploadBody,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ArtifactsArtifactItem,
        ErrorsCombinationsArtifactUploadBadJsonData | ErrorsBadAuthorizationErrors | ErrorsRequestEntityTooLargeErrors
      >({
        path: `/artifacts`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Работа с артефактами
     * @name GetArtifactsPortfolioConditions
     * @summary Условия загрузки портфолио
     * @request GET:/artifacts/portfolio/conditions
     * @secure
     */
    getArtifactsPortfolioConditions: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtifactsArtifactConditions, ErrorsBadAuthorizationErrors>({
        path: `/artifacts/portfolio/conditions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список ранее загруженных изображений с фотографиями. Их можно использовать при создании/редактировании резюме
     *
     * @tags Работа с артефактами
     * @name GetArtifactPhotos
     * @summary Получение фотографий
     * @request GET:/artifacts/photo
     * @secure
     */
    getArtifactPhotos: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtifactsArtifactPhotoResponse, ErrorsBadAuthorizationErrors>({
        path: `/artifacts/photo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Работа с артефактами
     * @name GetArtifactPhotosConditions
     * @summary Условия загрузки фотографий
     * @request GET:/artifacts/photo/conditions
     * @secure
     */
    getArtifactPhotosConditions: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtifactsArtifactConditions, ErrorsBadAuthorizationErrors>({
        path: `/artifacts/photo/conditions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список ранее загруженных изображений с портфолио. Их можно использовать при создании/редактировании резюме
     *
     * @tags Работа с артефактами
     * @name GetArtifactsPortfolio
     * @summary Получение портфолио
     * @request GET:/artifacts/portfolio
     * @secure
     */
    getArtifactsPortfolio: (
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtifactsArtifactPortfolioResponse, ErrorsBadAuthorizationErrors>({
        path: `/artifacts/portfolio`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет отредактировать описание портфолио
     *
     * @tags Работа с артефактами
     * @name EditArtifact
     * @summary Редактирование артефакта
     * @request PUT:/artifacts/{id}
     * @secure
     */
    editArtifact: (
      id: string,
      data: ArtifactsPortfolioDescription,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/artifacts/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Работа с артефактами
     * @name DeleteArtifact
     * @summary Удаление артефакта
     * @request DELETE:/artifacts/{id}
     * @secure
     */
    deleteArtifact: (
      id: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/artifacts/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),
  };
  suggests = {
    /**
     * @description Предназначены для использования в поле `text` при [поиске вакансий](https://github.com/hhru/api/blob/master/docs/vacancies.md#search). Содержит названия должностей, компаний и другие фразы, часто используемые при поиске вакансий
     *
     * @tags Подсказки
     * @name GetVacancySearchKeywords
     * @summary Подсказки по ключевым словам поиска вакансий
     * @request GET:/suggests/vacancy_search_keyword
     * @secure
     */
    getVacancySearchKeywords: (
      query: {
        /** Текст для поиска ключевого слова. Искомый текст должен быть длиной два или более символа и не более 3 000 символов. */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsSearchKeyword, SuggestsErrors>({
        path: `/suggests/vacancy_search_keyword`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Также доступна загрузка [полного дерева регионов](https://github.com/hhru/api/blob/master/docs/areas.md#areas) и [части дерева от определенного элемента](https://github.com/hhru/api/blob/master/docs/areas.md#item)
     *
     * @tags Подсказки
     * @name GetAreaLeavesSuggests
     * @summary Подсказки по регионам, являющимися листами в дереве регионов
     * @request GET:/suggests/area_leaves
     * @secure
     */
    getAreaLeavesSuggests: (
      query: {
        /** Текст для поиска региона. Искомый текст должен быть длиной два или более символа и не более 3 000 символов */
        text: string;
        /** Идентификатор региона из [справочника](https://github.com/hhru/api/blob/master/docs/areas.md#areas). Сужает подсказки поддеревом переданного идентификатора региона */
        area_id?: number;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsAreas, SuggestsErrors>({
        path: `/suggests/area_leaves`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Также доступна загрузка [полного дерева регионов](https://github.com/hhru/api/blob/master/docs/areas.md#areas) и [части дерева от определенного элемента](https://github.com/hhru/api/blob/master/docs/areas.md#item)
     *
     * @tags Подсказки
     * @name GetAreasSuggests
     * @summary Подсказки по регионам
     * @request GET:/suggests/areas
     * @secure
     */
    getAreasSuggests: (
      query: {
        /** Текст для поиска региона. Искомый текст должен быть длиной два или более символа и не более 3 000 символов */
        text: string;
        /** Идентификатор региона из [справочника](https://github.com/hhru/api/blob/master/docs/areas.md#areas). Сужает подсказки поддеревом переданного идентификатора региона */
        area_id?: number;
        /**
         * Включать ли в ответ регион, переданный в параметре `area_id`, если он подходит по искомому тексту
         * @default false
         */
        include_parent?: boolean;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsAreas, SuggestsErrors>({
        path: `/suggests/areas`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подсказки
     * @name GetSkillSetSuggests
     * @summary Подсказки по ключевым навыкам
     * @request GET:/suggests/skill_set
     * @secure
     */
    getSkillSetSuggests: (
      query: {
        /** Текст для поиска ключевых навыков. Искомый текст должен быть длиной два или более символа и не более 3 000 символов. */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsSkillSet, SuggestsErrors>({
        path: `/suggests/skill_set`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подсказки
     * @name GetProfessionalRolesSuggests
     * @summary Подсказки по профессиональным ролям
     * @request GET:/suggests/professional_roles
     * @secure
     */
    getProfessionalRolesSuggests: (
      query: {
        /**
         * Текст для поиска профессиональной роли. Искомый текст должен быть длиной два или более символа и не более 3 000 символов.
         * @example "водитель"
         */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsProfessionalRoles, SuggestsErrors>({
        path: `/suggests/professional_roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Данные из этой подсказки можно использовать, например, для выбора компании при заполнении опыта работы [в резюме](https://github.com/hhru/api/blob/master/docs/resumes.md#create_edit). Чтобы найти организации, которые могут публиковать вакансии, используйте [поиск](#tag/Rabotodatel/operation/search-employer)
     *
     * @tags Подсказки
     * @name GetRegisteredCompaniesSuggests
     * @summary Подсказки по зарегистрированным организациям
     * @request GET:/suggests/companies
     * @secure
     */
    getRegisteredCompaniesSuggests: (
      query: {
        /** Текст для поиска организации. Искомый текст должен быть длиной два или более символа и не более 3 000 символов */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsCompanies, SuggestsErrors>({
        path: `/suggests/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подсказки
     * @name GetFieldsOfStudySuggestions
     * @summary Подсказки по специализациям
     * @request GET:/suggests/fields_of_study
     * @secure
     */
    getFieldsOfStudySuggestions: (
      query: {
        /** Текст для поиска специализаций. Искомый текст должен быть длиной два или более символа и не более 3 000 символов. */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsFieldsOfStudy, SuggestsErrors>({
        path: `/suggests/fields_of_study`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Предназначены для использования в поле `text` при [поиске резюме](https://github.com/hhru/api/blob/master/docs/resumes_search.md#search-params). Содержит названия должностей, компаний и другие фразы, часто используемые при поиске резюме
     *
     * @tags Подсказки
     * @name GetResumeSearchKeywordsSuggests
     * @summary Подсказки по ключевым словам поиска резюме
     * @request GET:/suggests/resume_search_keyword
     * @secure
     */
    getResumeSearchKeywordsSuggests: (
      query: {
        /** Текст для поиска ключевого слова. Искомый текст должен быть длиной два или более символа и не более 3 000 символов. */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsSearchKeyword, SuggestsErrors>({
        path: `/suggests/resume_search_keyword`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Чтобы узнать список факультетов, обратитесь к [соответствующему методу](#tag/Obshie-spravochniki/operation/get-educational-institutions-dictionary)
     *
     * @tags Подсказки
     * @name GetEducationalInstitutionsSuggests
     * @summary Подсказки по названиям учебных заведений
     * @request GET:/suggests/educational_institutions
     * @secure
     */
    getEducationalInstitutionsSuggests: (
      query: {
        /** Текст для поиска учебного заведения. Искомый текст должен быть длиной два или более символа и не более 3 000 символов. */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsEducationalInstitutions, SuggestsErrors>({
        path: `/suggests/educational_institutions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подсказки
     * @name GetVacancyPositionsSuggests
     * @summary Подсказки по должностям вакансий
     * @request GET:/suggests/vacancy_positions
     * @secure
     */
    getVacancyPositionsSuggests: (
      query: {
        /**
         * Текст для поиска должности в вакансии. Искомый текст должен быть длиной два или более символа и не более 3 000 символов.
         * @example "водитель"
         */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsVacancyPositions, SuggestsErrors>({
        path: `/suggests/vacancy_positions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подсказки
     * @name GetPositionsSuggestions
     * @summary Подсказки по должностям резюме
     * @request GET:/suggests/positions
     * @secure
     */
    getPositionsSuggestions: (
      query: {
        /**
         * Текст для поиска должности. Искомый текст должен быть длиной два или более символа и не более 3 000 символов.
         * @example "водитель"
         */
        text: string;
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<SuggestsPositions, SuggestsErrors>({
        path: `/suggests/positions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  applicantComments = {
    /**
     * @description Метод требует наличия [платного доступа для работодателя](https://github.com/hhru/api/blob/master/docs/payable/employer_methods.md). Автор комментария может изменить его текст и тип доступа. Если параметр не передан, то его значение останется прежним
     *
     * @tags Комментарии к соискателю
     * @name UpdateApplicantComment
     * @summary Обновление комментария
     * @request PUT:/applicant_comments/{applicant_id}/{comment_id}
     * @secure
     */
    updateApplicantComment: (
      applicantId: string,
      commentId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      data?: {
        /** Текст комментария */
        text?: string;
        /** Тип доступа. Доступные значения перечислены [в справочнике](#tag/Obshie-spravochniki/operation/get-dictionaries) в поле `applicant_comment_access_type` */
        access_type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/applicant_comments/${applicantId}/${commentId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Метод требует наличия [платного доступа для работодателя](https://github.com/hhru/api/blob/master/docs/payable/employer_methods.md). Удалить комментарий может только его автор
     *
     * @tags Комментарии к соискателю
     * @name DeleteApplicantComment
     * @summary Удаление комментария
     * @request DELETE:/applicant_comments/{applicant_id}/{comment_id}
     * @secure
     */
    deleteApplicantComment: (
      applicantId: string,
      commentId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/applicant_comments/${applicantId}/${commentId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Метод требует наличия [платного доступа для работодателя](https://github.com/hhru/api/blob/master/docs/payable/employer_methods.md). Список будет содержать комментарии текущего пользователя, а также комментарии других менеджеров компании, если они открыли доступ к ним при публикации
     *
     * @tags Комментарии к соискателю
     * @name GetApplicantCommentsList
     * @summary Получение списка комментариев
     * @request GET:/applicant_comments/{applicant_id}
     * @secure
     */
    getApplicantCommentsList: (
      applicantId: string,
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      data?: {
        /** Номер страницы */
        page?: number;
        /** Результатов на странице */
        per_page?: number;
        /** Сортировка комментариев. Доступные значения перечислены [в справочнике](#tag/Obshie-spravochniki/operation/get-dictionaries) в поле `applicant_comments_order` */
        order_by?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApplicantCommentsApplicantCommentsList, ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors>({
        path: `/applicant_comments/${applicantId}`,
        method: "GET",
        query: query,
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод требует наличия [платного доступа для работодателя](https://github.com/hhru/api/blob/master/docs/payable/employer_methods.md)
     *
     * @tags Комментарии к соискателю
     * @name AddApplicantComment
     * @summary Добавление комментария
     * @request POST:/applicant_comments/{applicant_id}
     * @secure
     */
    addApplicantComment: (
      applicantId: string,
      data: {
        /** Текст комментария */
        text?: string;
        /** Тип доступа. Доступные значения перечислены [в справочнике](#tag/Obshie-spravochniki/operation/get-dictionaries) в поле `applicant_comment_access_type` */
        access_type?: string;
      },
      query?: {
        /**
         * Идентификатор локали (см. [Локализация](#tag/Obshie-spravochniki/operation/get-locales))
         * @default "RU"
         * @example "EN"
         */
        locale?: string;
        /**
         * Доменное имя сайта (см. [Выбор сайта](https://github.com/hhru/api/blob/master/docs/hosts.md))
         * @default "hh.ru"
         * @example "hh.ru"
         */
        host?: "hh.ru" | "rabota.by" | "hh1.az" | "hh.uz" | "hh.kz" | "headhunter.ge" | "headhunter.kg";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ApplicantCommentsApplicantCommentItem,
        ErrorsBadArgumentErrors | ErrorsBadAuthorizationErrors | ErrorsNotFoundErrors
      >({
        path: `/applicant_comments/${applicantId}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
}
