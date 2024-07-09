import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../componants/navbar";

export default function PaymentResult() {
    const [searchParams] = useSearchParams();
    const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
    const vnp_TransactionNo = searchParams.get("vnp_TransactionNo");
    const vnp_TxnRef = searchParams.get("vnp_TxnRef");
    const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");
    const vnp_Amount = searchParams.get("vnp_Amount");
    const vnp_BankCode = searchParams.get("vnp_BankCode");
    const vnp_PayDate = searchParams.get("vnp_PayDate");
    const vnp_TransactionStatus = searchParams.get("vnp_TransactionStatus");

    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true}/>
            <div className="container mt-5">
                <div className="header clearfix mb-4">
                    <h3 className="text-center text-primary">Payment Results</h3>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Payment transaction code:</th>
                                <td>{vnp_TxnRef}</td>
                            </tr>
                            <tr>
                                <th>Amount of money:</th>
                                <td>{vnp_Amount}</td>
                            </tr>
                            <tr>
                                <th>Transaction description:</th>
                                <td>{vnp_OrderInfo}</td>
                            </tr>
                            <tr>
                                <th>Billing error code:</th>
                                <td>{vnp_ResponseCode}</td>
                            </tr>
                            <tr>
                                <th>Transaction code at CTT VNPAY-QR:</th>
                                <td>{vnp_TransactionNo}</td>
                            </tr>
                            <tr>
                                <th>Payment bank code:</th>
                                <td>{vnp_BankCode}</td>
                            </tr>
                            <tr>
                                <th>Payment time:</th>
                                <td>{vnp_PayDate}</td>
                            </tr>
                            <tr>
                                <th>Transaction status:</th>
                                <td>{vnp_TransactionStatus === "00" ? "Successful transaction" : "Transaction failed"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <footer className="footer mt-5 text-center">
                    <p>&copy; Jobnova</p>
                </footer>
            </div>
        </>
        
    );
}
