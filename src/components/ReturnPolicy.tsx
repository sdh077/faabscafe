import React from 'react'

export default function ReturnPolicy() {
    const td = 'px-4 py-2 font-normal '
    const th = "p-2 font-normal bg-[#fafafa] text-left"
    return (
        <div id="RETURNPOLICY">
            <div className="text-sm" style={{ marginTop: 100 }}>
                <h4 className="zRVNb6dB4r">반품/교환정보</h4>
                <div className="mb-2">
                    <p className='font-[#8f8f8f]'>
                        반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소
                        등을 협의하신 후 반품상품을 발송해 주시기 바랍니다.
                    </p>
                </div>
                <table cellSpacing={0} className="-SPZfRz-75">
                    <colgroup>
                        <col width={150} />
                        <col width={410} />
                        <col width={150} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row" className={th}>
                                판매자 지정택배사
                            </th>
                            <td colSpan={3} className={td}>
                                한진택배
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className={th}>
                                반품배송비
                            </th>
                            <td className={td}>
                                편도 3,000원 (최초 배송비 무료인 경우 6,000원 부과)
                            </td>
                            <th scope="row" className={th}>
                                교환배송비
                            </th>
                            <td className={td}>6,000원</td>
                        </tr>
                        <tr>
                            <th scope="row" className={th}>
                                보내실 곳
                            </th>
                            <td colSpan={3} className={td}>
                                서울특별시 은평구 증산로15가길 15 1층 (우 : 03448){" "}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan={2} className={th}>
                                반품/교환 사유에 따른 요청 가능 기간
                            </th>
                            <td colSpan={3} className={td}>
                                구매자 단순 변심은 상품 수령 후 7일 이내{" "}
                                <span className="_3OXYkEjCxo">(구매자 반품배송비 부담)</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className={td}>
                                표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월
                                이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내{" "}
                                <span className="_3OXYkEjCxo">(판매자 반품 배송비 부담)</span>
                                <br />둘 중 하나 경과 시 반품/교환 불가
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan={7} className={th}>
                                반품/교환 불가능 사유
                            </th>
                            <td colSpan={3} className={td}>
                                <ul className="_1KgmaRlDnI">
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">1.</span>반품요청기간이 지난 경우
                                    </li>
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">2.</span>구매자의 책임 있는 사유로
                                        상품 등이 멸실 또는 훼손된 경우{" "}
                                        <span className="_3OXYkEjCxo">
                                            (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는
                                            제외)
                                        </span>
                                    </li>
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">3.</span>구매자의 책임있는 사유로
                                        포장이 훼손되어 상품 가치가 현저히 상실된 경우{" "}
                                        <span className="_3OXYkEjCxo">
                                            (예: 식품, 화장품, 향수류, 음반 등)
                                        </span>
                                    </li>
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">4.</span>구매자의 사용 또는 일부
                                        소비에 의하여 상품의 가치가 현저히 감소한 경우{" "}
                                        <span className="_3OXYkEjCxo">
                                            (라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)
                                        </span>
                                    </li>
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">5.</span>시간의 경과에 의하여
                                        재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우
                                    </li>
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">6.</span>고객의 요청사항에 맞춰
                                        제작에 들어가는 맞춤제작상품의 경우{" "}
                                        <span className="_3OXYkEjCxo">
                                            (판매자에게 회복불가능한 손해가 예상되고, 그러한 예정으로
                                            청약철회권 행사가 불가하다는 사실을 서면 동의 받은 경우)
                                        </span>
                                    </li>
                                    <li className="_2VsRrv9CHS">
                                        <span className="_18irp6aLGm">7.</span>복제가 가능한 상품 등의
                                        포장을 훼손한 경우{" "}
                                        <span className="_3OXYkEjCxo">
                                            (CD/DVD/GAME/도서의 경우 포장 개봉 시)
                                        </span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
