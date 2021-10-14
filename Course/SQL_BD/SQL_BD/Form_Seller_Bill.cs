using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Seller_Bill : Form
    {
        public Form_Seller_Bill()
        {
            InitializeComponent();
        }

        private void Form_Seller_Bill_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "BD_Shop_4semDataSet.Seller_Bill". При необходимости она может быть перемещена или удалена.
            this.Seller_BillTableAdapter.Fill(this.BD_Shop_4semDataSet.Seller_Bill);

            this.reportViewer1.RefreshReport();
        }
    }
}
