using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Statistics_Seller : Form
    {
        public Form_Admin_Statistics_Seller()
        {
            InitializeComponent();
        }

        private void Form_Admin_Statistics_Seller_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "BD_Shop_4semDataSet.Admin_Seller_Top1000". При необходимости она может быть перемещена или удалена.
            this.Admin_Seller_Top1000TableAdapter.Fill(this.BD_Shop_4semDataSet.Admin_Seller_Top1000);

            this.reportViewer1.RefreshReport();
        }
    }
}
